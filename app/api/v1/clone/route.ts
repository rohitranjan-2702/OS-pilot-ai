import prisma from "../../../../lib/prisma";
// import shell from "shelljs";
import { execSync } from "child_process";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { repo_url } = json;

    console.log(repo_url);

    // TODO: add the deployed clone url

    return Response.json({
      status: 200,
      //   data: Users,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Something went wrong!",
      status: 503,
      error: error,
    });
  }
}
