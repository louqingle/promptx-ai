function imagePrompt() {
    const text = document.getElementById("input").value.trim();

    if (!text) {
        alert("请输入图片内容");
        return;
    }

    document.getElementById("output").value =
`【中文 Prompt】

${text}，电影级光影，超写实，高细节，8K，HDR，真实摄影，柔和自然光，构图精美，专业摄影。

————————————

【English Prompt】

${text}, cinematic lighting, ultra realistic, masterpiece, 8k, HDR, highly detailed, professional photography, soft light.

————————————

【Negative Prompt】

low quality,
blurry,
bad anatomy,
extra fingers,
deformed,
watermark,
text,
logo,
noise`;
}

function videoPrompt() {
    const text = document.getElementById("input").value.trim();

    if (!text) {
        alert("请输入视频内容");
        return;
    }

    document.getElementById("output").value =
`【视频 Prompt】

主题：
${text}

镜头：
广角 + 特写

运镜：
缓慢推进、环绕、升降

光影：
电影感、体积光、HDR

画质：
4K、60FPS、超清

English Prompt：

${text}, cinematic, smooth camera movement, volumetric lighting, 4K, ultra realistic.

Negative Prompt：

low quality,
blur,
noise,
watermark,
logo`;
}

function copyPrompt() {
    const output = document.getElementById("output");

    output.select();
    document.execCommand("copy");

    alert("Prompt 已复制！");
}

function fill(text) {
    document.getElementById("input").value = text;
}
