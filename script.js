const templates = {
  portrait: "超写实人像，电影感光影，85mm镜头，真实肤质，8K，高细节",
  anime: "Anime style, masterpiece, vibrant colors, detailed illustration",
  cyber: "Cyberpunk city, neon lights, cinematic, ultra realistic, 8K",
  food: "Food photography, soft light, delicious, high detail, commercial"
};

function imagePrompt() {
  const text = document.getElementById("input").value.trim();

  if (!text) {
    alert("请输入内容");
    return;
  }

  const prompt = `
【中文 Prompt】

${text}

超写实，电影感光影，高细节，8K，HDR，真实摄影，柔和自然光，专业构图。

————————————

【English Prompt】

${text}, ultra realistic, cinematic lighting, masterpiece, 8k, HDR, highly detailed.

————————————

【Negative Prompt】

low quality,
blurry,
bad anatomy,
watermark,
logo,
text,
noise,
deformed
`;

  document.getElementById("output").value = prompt;
}

function videoPrompt() {
  const text = document.getElementById("input").value.trim();

  if (!text) {
    alert("请输入内容");
    return;
  }

  document.getElementById("output").value = `
【视频 Prompt】

主题：${text}

镜头：
广角、特写、航拍

运镜：
推进、环绕、升降

光影：
电影感、HDR、体积光

画质：
4K、60FPS

English Prompt：

${text}, cinematic camera movement, ultra realistic, volumetric lighting, 4K.

Negative Prompt：

blur,
low quality,
watermark,
logo
`;
}

function copyPrompt() {
  navigator.clipboard.writeText(document.getElementById("output").value);
  alert("复制成功！");
}

function fill(text) {
  document.getElementById("input").value = text;
}
