import { ActionTypes } from './action';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {
    /*  id: 12345,
    username: 'Pritesh Kr Jha', */
  },
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.SIGNIN_INPROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SIGNIN_IDLE:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case ActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        error: null,
      };
    case ActionTypes.SIGNIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
