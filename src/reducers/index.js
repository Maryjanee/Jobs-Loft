import { combineReducers } from 'redux';
import mealReducer from './meals';

const rootReducer = combineReducers({
  mealReducer,
});

export default rootReducer;
