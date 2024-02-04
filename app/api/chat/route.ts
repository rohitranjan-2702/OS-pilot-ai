import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { OpenAI } from "openai";
// import { auth } from "@/lib/auth";
import { nanoid } from "nanoid";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const userId = "okok1122";

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, repoName, history } = json;

  if (messages?.length === 0 || !messages) {
    return new Response("No messages in the request", {
      status: 501,
    });
  }

  const question = messages[0].content;

  console.log(messages);
  // const userId = (await auth())?.user.id;

  // if (!userId) {
  //   return new Response("Unauthorized", {
  //     status: 401,
  //   });
  // }
  // if (!question) {
  //   return new Response("No question in the request", {
  //     status: 401,
  //   });
  // }

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

    // async function main() {
    const client = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY as string,
    });

    // init vectorstore
    const pineconeIndex = client.Index(
      process.env.PINECONE_INDEX_NAME as string
    );

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings(),
      {
        pineconeIndex,
        textKey: "text",
      }
    );

    const model = new ChatOpenAI({
      temperature: 0.3, // increase temepreature to get more creative answers
      modelName: "gpt-4-turbo-preview",
      streaming: true,
      maxTokens: 2000, //change this to gpt-4 if you have access
    });

    const chain = ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      {
        qaTemplate: QA_PROMPT_CHAT,
        questionGeneratorTemplate: CONDENSE_PROMPT,
        returnSourceDocuments: true, //The number of source documents returned is 4 by default
      }
    );

    // const res = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages,
    //   temperature: 0.7,
    //   stream: true,
    // });

    // console.log(res);
    const res = await chain.invoke({
      question: sanitizedQuestion,
      chat_history: history || [],
    });

    console.log("response -> \n", res);
    console.log("question:- ", question);
    const stream = OpenAIStream(res.text);

    return new Response(res.text);
    // const stream = OpenAIStream(res, {
    //   async onCompletion(completion) {
    //     const title = json.messages[0].content.substring(0, 100);
    //     const id = json.id ?? nanoid();
    //     const createdAt = Date.now();
    //     const path = `/chat/${id}`;
    //     const payload = {
    //       id,
    //       title,
    //       userId,
    //       createdAt,
    //       path,
    //       messages: [
    //         ...messages,
    //         {
    //           content: completion,
    //           role: "assistant",
    //         },
    //       ],
    //     };
    //     await kv.hmset(`chat:${id}`, payload);
    //     await kv.zadd(`user:chat:${userId}`, {
    //       score: createdAt,
    //       member: `chat:${id}`,
    //     });
    //   },
    // });

    // return new StreamingTextResponse(stream);
    // res.status(200).json(response);
  } catch (error) {
    console.log("error", error);
    return new Response("No question in the request", {
      status: 500,
    });
  }
}
