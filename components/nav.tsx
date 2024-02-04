import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Navbar from "./Navbar";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <Navbar session={session} />
    </>
  );
}
