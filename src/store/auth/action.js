import { verifyUsername, verifyUserSignin } from '../../services/auth.service';

const Prefix = '[auth]';

export const ActionTypes = {
  SIGNIN_INPROGRESS: `${Prefix} signin inprogress`,
  SIGNIN_IDLE: `${Prefix} signin idle`,
  SIGNIN_SUCCESS: `${Prefix} signin success`,
  SIGNIN_FAIL: `${Prefix} signin fail`,
  LOGOUT: `${Prefix} logout`,
  CLEAR_ERROR: `${Prefix} clear error`,
};

export const checkUser = username => async dispatch => {
  dispatch(signinInprogress());
  const response = await verifyUsername(username);
  if (response.success) {
    dispatch(signinIdle());
    return true;
  } else {
    dispatch(signinFail(response));
    return false;
  }
};

export const userSignin = (username, password) => async dispatch => {
  dispatch(signinInprogress());
  const response = await verifyUserSignin(username, password);
  if (response.success) {
    return response.user;
  } else {
    dispatch(signinFail(response));
    return false;
  }
};

export const signinInprogress = () => ({
  type: ActionTypes.SIGNIN_INPROGRESS,
});

export const signinIdle = () => ({
  type: ActionTypes.SIGNIN_IDLE,
});

export const signinSuccess = user => ({
  type: ActionTypes.SIGNIN_SUCCESS,
  payload: { user },
});

export const signinFail = error => ({
  type: ActionTypes.SIGNIN_FAIL,
  payload: { error },
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const clearError = () => ({
  type: ActionTypes.CLEAR_ERROR,
});
