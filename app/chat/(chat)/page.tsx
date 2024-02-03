import { nanoid } from "nanoid";
import { Chat } from "@/components/chat";

export default function IndexPage() {
  const id = nanoid();

  return <Chat />;
}
