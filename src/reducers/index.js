import { combineReducers } from 'redux';
import jobReducer from './jobs';
import filterReducer from './filter';

const rootReducer = combineReducers({
  jobReducer,
  filterReducer,
});

export default rootReducer;
