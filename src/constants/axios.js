import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const requestHandler = request => {
  // console.log('Xhr Request:', request);
  // Modify request here
  return request;
};

const responseHandler = response => {
  // console.log('Xhr Response:', response);
  // Modify response here
  if (response && response.data) {
    return response.data;
  }
  return response;
};

const errorHandler = error => {
  console.log(error);
  if (
    (error && error.code && error.code === 'ECONNABORTED') ||
    (error && error.message === 'Network Error')
  ) {
    error.message =
      'We are unable to connect to server. please try again later.';
  }
  if (error.response && error.response?.data) {
    if (error.response?.data?.systemMessage)
      error.message = error.response?.data?.systemMessage;
  }
  return Promise.reject(error);
};

// request intercepter
instance.interceptors.request.use(request => requestHandler(request));
// response intercepter
instance.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default instance;
