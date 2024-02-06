import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, LangChainStream } from "ai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

const pineconeIndex = client.Index(process.env.PINECONE_INDEX_NAME as string);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: NextRequest) {
  //   const { message } = await req.json();
  const json = await req.json();
  const { messages, repoName, history } = json;

  if (messages?.length === 0 || !messages) {
    return new Response("No messages in the request", {
      status: 501,
    });
  }

  const question = messages[0].content;

  const sanitizedQuestion = question.trim().replaceAll("\n", " ");
  try {
    const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

    Chat History:
    {chat_history}
    Follow Up Input: {question}
    Standalone question:`;

    const QA_PROMPT_CHAT = `You are a proficient software developer. Respond with the syntactically correct code for to the question below. Make sure you follow these rules:
    1. Use context to understand the code and how to use it & apply.
    2. Do not add license information to the output code.
    3. Always provide the code in the markdown format.
    4. Ensure all the requirements in the question are met.

    Question:
    {question}

    Context:
    {context}

    Helpful answer in markdown:`;

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings(),
      {
        pineconeIndex,
        textKey: "text",
      }
    );

    const model = new ChatOpenAI({
      temperature: 0.3,
      modelName: "gpt-3.5-turbo",
      streaming: true,
      maxTokens: 2000,
    });

    const chain = ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      {
        qaTemplate: QA_PROMPT_CHAT,
        questionGeneratorTemplate: CONDENSE_PROMPT,
        returnSourceDocuments: true,
      }
    );

    const res = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    });

    //   const response = await openai.chat.completions.create({
    //     model: "gpt-4",
    //     stream: true,
    //     messages: [{ role: "user", content: message }],
    //   });
    //   const stream = OpenAIStream(response);
    //   return new StreamingTextResponse(stream);

    return new StreamingTextResponse(res.text);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong!",
        status: 503,
        error: error,
      },
      { status: 503 }
    );
  }
}
