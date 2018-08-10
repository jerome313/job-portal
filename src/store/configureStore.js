import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import jobsReducer from '../reducers/jobs'
import applicationsReducer from '../reducers/applications';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      jobs:jobsReducer,
      auth: authReducer,
      applications:applicationsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
