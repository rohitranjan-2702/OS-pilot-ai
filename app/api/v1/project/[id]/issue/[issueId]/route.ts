import prisma from "../../../../../../../lib/prisma";

// get issue by passing issue id

export async function GET(req:Request,{params}:any){
    try{
        const {issueId}=params;
        const issues=await prisma.issue.findUnique({
            where:{
                id:issueId
            }
        })
        return Response.json({
            data:{
                message:issues,
                status:200
            }
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