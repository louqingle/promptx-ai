"use client";

import { useState } from "react";

export default function Chat(){

  const [input,setInput]=useState("");
  const [answer,setAnswer]=useState("");

  async function send(){

    setAnswer("AI正在思考...");

    const res = await fetch("/api/chat",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:input
      })
    });

    const data=await res.json();

    setAnswer(data.reply);
  }


  return(
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">
        ChinaAI Chat
      </h1>


      <textarea
      className="mt-10 w-full p-5 text-black rounded-xl"
      placeholder="输入你的问题..."
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />


      <button
      onClick={send}
      className="mt-5 px-8 py-3 bg-cyan-500 rounded-xl"
      >
      Send
      </button>


      <div className="mt-10 p-5 bg-white/10 rounded-xl">
        {answer}
      </div>


    </main>
  )
}
