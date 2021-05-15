import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import freeze from 'redux-freeze';
import { ActionTypes } from './auth/action';
import auth from './auth/reducer';

// const loggerMiddleware = createLogger();

const appReducer = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  if (action.type === ActionTypes.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default function configureStore(preloadedState) {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(freeze /* loggerMiddleware */);
  }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, ...middlewares)),
  );
}
