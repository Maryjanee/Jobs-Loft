import axios from 'axios';
import { GET_JOBS_ERROR, GET_JOBS_SUCCESS, GET_JOBS_REQUEST } from '../types';

export const getJobsRequest = () => (
  {
    type: GET_JOBS_REQUEST,
  }
);

export const getJobsSuccess = jobs => (
  {
    type: GET_JOBS_SUCCESS,
    payload: jobs,
  }
);

export const getJobsError = error => ({
  type: GET_JOBS_ERROR,
  payload: error,
}
);

export const fetchJobs = () => dispatch => {
  dispatch(getJobsRequest);
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const jobs = response.data;
      dispatch(getJobsSuccess(jobs));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(getJobsError(errorMsg));
    });
};
