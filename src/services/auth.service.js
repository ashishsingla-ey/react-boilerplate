// import axios from '../constants/axios';

export const verifyLoggedInUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const verifyUsername = async username => {
  let result;
  try {
    result = await fakeVerify(username);
  } catch (e) {
    result = e;
  }
  return result;
};

export const verifyUserSignin = async (username, password) => {
  let result;
  try {
    result = await fakeVerify(username, password);
  } catch (e) {
    result = e;
  }
  return result;
};

const fakeVerify = (u = '', p = '') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
