import prisma from "../../../../lib/prisma";
import bcrypt from 'bcrypt'

export async function POST(req:Request){
    try{
        const body=await req.json();
        const {name,email,password}=body;

        const hashedPassword = await bcrypt.hash(password, 10)

        const user=await prisma.user.create({
            data:{
                name:name,
                email:email,
                hashedPassword: hashedPassword,
            }
        })

        return Response.json({
            message: "new user ADDED",
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