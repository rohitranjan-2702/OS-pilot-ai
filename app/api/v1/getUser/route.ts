import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const Users = await prisma.user.findMany({});

    return Response.json({
      status: 200,
      data: Users,
      message: "Data",
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
