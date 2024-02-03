import prisma from "../../../../lib/prisma";


// get all project
export async function GET(){
    try{
        const Projects=await prisma.project.findMany();

        if(Projects.length==0){
            return Response.json({
                status: 200,
                message: "No more project data",
            });
        }

        return Response.json({
        status: 200,
        data: Projects,
        message: "Data",
        });
    }catch(error){
        console.log(error);
        return Response.json({
        message: "Something went wrong!",
        status: 503,
        error: error,
        });
    }
}


// add/create the project
export async function POST(req:Request){
    const body=await req.json();

    try{
        const {proName,proDesc,techStack,proURL,stars}=body;

        const project=await prisma.project.create({
            data:{
                proName,proDesc,techStack,proURL,stars
            }
        })

        return Response.json({
            message:"a new project added",
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