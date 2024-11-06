const OpenAI = require("openai")

const token = "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";
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

async function main(n) {
  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: n }
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName
    });

    if (response.choices && response.choices.length > 0) {
      console.log(response.choices[0].message.content);
    } else {
      console.log("Không có lựa chọn hợp lệ trong phản hồi.");
    }
  } catch (err) {
    console.error("The sample encountered an error:", err);
  }
}

// Sử dụng addEventListener để gọi hàm main khi nhấn vào nút

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('sm').addEventListener("click", () => {
        const usrValue = document.getElementById("usr").value;
        main(usrValue).catch((err) => {
            console.error("Have an error:", err)
        })
    })
})
