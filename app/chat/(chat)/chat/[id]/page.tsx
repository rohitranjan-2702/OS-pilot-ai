import { type Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Session } from "next-auth";
// import { auth } from "@/lib/auth";
import { getChat } from "@/app/actions";
import { Chat } from "@/components/chat";

export interface ChatPageProps {
  params: {
    id: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export async function generateMetadata({
  params,
}: ChatPageProps): Promise<Metadata> {
  const session: Session | null = await getServerSession(authOptions);

  if (!session?.user) {
    return {};
  }

  const chat = await getChat(params.id, session.user.id);
  return {
    title: chat?.title.toString().slice(0, 50) ?? "Chat",
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(`/`);
  }

  const chat = await getChat(params.id, session.user.id);

  if (!chat) {
    notFound();
  }

  if (chat?.userId !== session?.user?.id) {
    notFound();
  }

  return <Chat id={chat.id} initialMessages={chat.messages} />;
}
