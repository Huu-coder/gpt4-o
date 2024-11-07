import express from "express"
import axios from "axios";

const app = express();
const port = 3001;

// API key của GitHub (lưu trữ ở server, không lộ ra ngoài)
const GITHUB_API_KEY = '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';

app.get('/api/github', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${GITHUB_API_KEY}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error calling GitHub API');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
