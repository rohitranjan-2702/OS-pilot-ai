import prisma from "../../../../../../lib/prisma";

// CREATE AN ISSUE OF A PARTICULAR PROJECT
export async function POST(req:Request,{params}:any){
    try{
        const {id}=params;
        const body=await req.json();

        const {name,description,URL}=body;

        const issues=await prisma.issue.create({
            data:{
                name:name,description:description,URL:URL,projectId:id
            }
        })

        return Response.json({
            message:`a new issue have beeen added in the project with id->${id}`,
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
