import { combineReducers } from 'redux';
import jobReducer from './jobs';

const rootReducer = combineReducers({
  jobReducer,
});

export default rootReducer;
