// Server Trung Gian
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Tạo một endpoint để cung cấp API key
app.get('/api/get-api-key', (req, res) => {
  const apiKey = "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"; // Hoặc API key mà bạn muốn cung cấp
  res.json({ apiKey });  // Trả API key cho client
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
