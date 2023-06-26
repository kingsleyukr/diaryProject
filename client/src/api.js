import axios from 'axios';

const API_BASE_URL = '/api/diary';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllEntries = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching entries:', error.message);
    throw error;
  }
};

export const createEntry = async (entryData) => {
  try {
    const response = await api.post('/', entryData);
    return response.data;
  } catch (error) {
    console.error('Error creating entry:', error.message);
    throw error;
  }
};
