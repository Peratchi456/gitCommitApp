// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.use(express.json());
app.use(cors());

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
});

// Endpoint to get commit differences
app.get('/repos/:owner/:repository/commits/:oid', async (req, res) => {
  const { owner, repository, oid } = req.params;
  try {
    const response = await githubAPI.get(`/repos/${owner}/${repository}/commits/${oid}`);
    res.json(response.data);
    const data = JSON.stringify(response.data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
