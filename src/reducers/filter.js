import { FILTER_JOB_TYPES } from '../types';

const initialState = { filter: '' };

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_JOB_TYPES:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
