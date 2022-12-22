import axios from 'axios';

const postDataRequest = async (data: unknown, linkName: string) => {
  try {
    await axios.post(`https://my-server.com/${linkName}`, data);
    return true;
  } catch {
    return false;
  }
};

export default postDataRequest;
