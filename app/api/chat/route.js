export async function POST(req) {

  const { message } = await req.json();

  const response = await fetch(
    "https://api.deepseek.com/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.AI_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      })
    }
  );


  const data = await response.json();


  return Response.json({
    reply: data.choices[0].message.content
  });

}
