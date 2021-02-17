import { GET_JOBS_REQUEST, GET_JOBS_SUCCESS, GET_JOBS_ERROR } from '../types';

const initialState = {
  pending: false,
  jobs: [],
  error: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_REQUEST:
      return { ...state, pending: true, categories: [] };
    case GET_JOBS_SUCCESS:
      return {
        ...state, pending: false, jobs: action.payload, error: '',
      };
    case GET_JOBS_ERROR:
      return {
        ...state, pending: false, jobs: [], error: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
