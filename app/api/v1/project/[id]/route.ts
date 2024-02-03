import prisma from "../../../../../lib/prisma";

// get project informatioon using by id
export async function GET(request:Request,{params}:any){
    const {id}=params;

    try{
        const projects=await prisma.project.findUnique({
            where:{
                pro_id:id
            },
            include:{
                proIssue:true
            }
        })

        return Response.json({
            message:projects,
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