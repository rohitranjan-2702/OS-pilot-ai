import prisma from "../../../../../lib/prisma";

export async function GET(req:Request,{params}:any){
    try{
        const {id}=params;
        const users=await prisma.user.findUnique({
            where:{
                id:id
            }
        })

        return Response.json({
            message:users,
            status:200
        })

    }catch(error){
        console.log(error);
        return Response.json({
        message: "Something went wrong!",
        status: 503,
        error: error,
        });
    }
}