import prisma from "../../../../lib/prisma";
import bcrypt from 'bcrypt'

export async function POST(req:Request){
    try{
        const body=await req.json();
        const {email}=body;


        const user=await prisma.user.findUnique({
            where:{
               email:email 
            }
        })

        return Response.json({
            message: user,
            status: 200,
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