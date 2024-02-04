"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';

function login() {
    const router = useRouter();
    const[email,setEmail]=useState();
    const [password,setPassword]=useState();


    const navigate=()=>{
      router.push('/register')
    }

    const submit=async(e)=>{
      e.preventDefault();
      const res=await axios.post("http://localhost:3000/api/v1/login",{email,password})
      localStorage.setItem("next_user",JSON.stringify({
        name
      }));
      console.log(res.data.message);
    }

  return (
    <>
      <form>
        <label for="email"> email </label>
        <input type="text" placeholder="enter your email" name={email} value={email} onChange={(e)=>setEmail(e.target.value)} id="email"/>

        <br/>
        <label for="password"> Password </label>
        <input type="text" placeholder="enter your password" name={password} value={password} onChange={(e)=>setPassword(e.target.value)} id="password"/>

        <button onClick={submit}>submit</button>
      </form>

      <p className='hover:underline' onClick={navigate}>new user move to register</p>
    </>
  )
}

export default login
