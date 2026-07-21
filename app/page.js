export default function Home() {
  const models = [
    {
      name: "DeepSeek",
      desc: "强大的中文推理模型"
    },
    {
      name: "Qwen AI",
      desc: "阿里通义千问大模型"
    },
    {
      name: "GLM AI",
      desc: "智谱清言大模型"
    },
    {
      name: "Claude",
      desc: "高级代码与创作模型"
    },
    {
      name: "GPT",
      desc: "全球领先 AI 模型"
    },
    {
      name: "豆包 AI",
      desc: "字节跳动智能模型"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* 导航 */}
      <nav className="flex justify-between items-center px-8 py-6">

        <h1 className="
        text-3xl 
        font-bold 
        bg-gradient-to-r 
        from-cyan-400 
        to-purple-500 
        bg-clip-text 
        text-transparent">
          PromptX AI
        </h1>

        <button className="
        px-6 py-2 
        rounded-xl 
        bg-white 
        text-black
        ">
          登录
        </button>

      </nav>


      {/* 主视觉 */}

      <section className="
      min-h-[85vh]
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-6
      ">


        <h2 className="
        text-5xl md:text-7xl
        font-black
        max-w-5xl
        leading-tight
        ">

          下一代
          <span className="
          text-cyan-400">
          AI 创作平台
          </span>

        </h2>


        <p className="
        mt-8
        text-xl
        text-gray-400
        max-w-3xl
        ">

          一个入口连接全球 AI 模型。
          使用 AI 生成图片、视频、文本和代码。

        </p>



        <div className="
        flex
        gap-5
        mt-10
        flex-wrap
        justify-center
        ">


          <button className="
          px-10
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-purple-600
          font-bold
          ">

            开始创作

          </button>



          <button className="
          px-10
          py-4
          rounded-2xl
          border
          border-gray-600
          ">

            查看模型

          </button>


        </div>



        {/* 功能 */}

        <div className="
        grid
        md:grid-cols-3
        gap-6
        mt-20
        max-w-5xl
        ">


          {
            [
              "🖼 AI 图片生成",
              "🎬 AI 视频生成",
              "✍️ AI Prompt生成"
            ].map(item=>(

              <div
              key={item}
              className="
              p-8
              rounded-3xl
              bg-white/10
              backdrop-blur
              border
              border-white/10
              text-xl
              ">

                {item}

              </div>

            ))
          }


        </div>



      </section>




      {/* 模型 */}

      <section className="px-8 pb-20">

        <h2 className="
        text-4xl
        font-bold
        text-center
        mb-10
        ">
          支持 AI 模型
        </h2>


        <div className="
        grid
        md:grid-cols-3
        gap-6
        max-w-6xl
        mx-auto
        ">


        {
          models.map(model=>(

            <div
            key={model.name}
            className="
            p-8
            rounded-3xl
            bg-white/10
            backdrop-blur
            border
            border-white/10
            ">


              <h3 className="
              text-2xl
              font-bold
              ">
                {model.name}
              </h3>


              <p className="
              mt-3
              text-gray-400
              ">
                {model.desc}
              </p>


            </div>

          ))
        }


        </div>

      </section>


    </main>
  )
}
