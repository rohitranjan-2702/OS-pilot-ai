import { nanoid } from "nanoid";
import { Chat } from "../../../components/Cards";

export default function IndexPage() {
  const id = nanoid();

  return <>
    <Chat />
  </>
}
