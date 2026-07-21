export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          ChinaAI Hub
        </h1>

        <button className="px-5 py-2 rounded-xl bg-white text-black">
          Login
        </button>
      </nav>


      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

        <h2 className="text-6xl font-bold max-w-4xl">
          Access The Best
          <span className="text-cyan-400">
            {" "}Chinese AI Models
          </span>
        </h2>


        <p className="mt-6 text-gray-400 text-xl max-w-2xl">
          One API. Multiple AI Models.
          Build your applications with powerful Chinese AI technology.
        </p>


        <div className="flex gap-5 mt-10">

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600">
            Start Building
          </button>

          <button className="px-8 py-4 rounded-2xl border border-gray-600">
            View Models
          </button>

        </div>


        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {
            [
              "Qwen AI",
              "DeepSeek",
              "GLM AI"
            ].map((model)=>(

              <div
              key={model}
              className="p-8 rounded-3xl bg-white/10 backdrop-blur border border-white/10"
              >

                <h3 className="text-2xl font-bold">
                  {model}
                </h3>

                <p className="text-gray-400 mt-3">
                  Powerful Chinese AI model API
                </p>

              </div>

            ))
          }

        </div>

      </section>

    </main>
  )
}
