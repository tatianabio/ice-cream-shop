import axios from 'axios';

const postDataRequest = async (data: unknown) => {
  try {
    await axios.post('https://my-server.com', data);
    return true;
  } catch {
    return false;
  }
};

export default postDataRequest;
