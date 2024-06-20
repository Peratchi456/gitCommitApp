import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getCommitDetails = async (owner, repo, commitSha) => {
  try {
    const response = await axios.get(`${API_URL}/repos/${owner}/${repo}/commits/${commitSha}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching commit details:', error);
    throw error;
  }
};
