import axios from 'axios';

const baseUrl = 'https://dummyjson.com';

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${url}`, { timeout: 3000 });
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
