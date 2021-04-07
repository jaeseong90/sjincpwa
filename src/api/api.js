import axios from 'axios';

export const postApiData = async (path, param = {}) => {
  try {
    const promis = await axios.pos(`http://localhost:52672/${path}`, {
      params: {
        ...param,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const getApiData = async (path, param = {}) => {
  try {
    const promis = await axios.get(`http://localhost:52672/${path}`, {
      params: {
        ...param,
      },
    });
    return promis.data;
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};
