import axios from "axios";

const instance = axios.create({
  baseURL: `/api/`,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

const responseBody = (response) => response.data;

const responseError = (err) => {
  if (axios.isAxiosError(err)) {
    throw new Error(err.response.data.message || err.response.data.error);
  } else {
    throw new Error(err.message);
  }
};

const requests = {
  get: (url) => instance.get(url).then(responseBody).catch(responseError),
  post: (url, body) =>
    instance.post(url, body).then(responseBody).catch(responseError),
  put: (url, body) =>
    instance.put(url, body).then(responseBody).catch(responseError),
  delete: (url) => instance.delete(url).then(responseBody).catch(responseError),
};

export default requests;
