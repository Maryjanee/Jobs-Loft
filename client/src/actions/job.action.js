import jobService from '../services/job.service';
import {
  GET_JOBS_ERROR, GET_JOBS_SUCCESS, GET_JOBS_REQUEST, FILTER_JOB_TYPES,
} from '../types';

export const getJobsRequest = () => ({
  type: GET_JOBS_REQUEST,
});

export const getJobsSuccess = jobs => ({
  type: GET_JOBS_SUCCESS,
  payload: jobs,
});

export const getJobsError = error => ({
  type: GET_JOBS_ERROR,
  payload: error,
});

export const filterJobTypes = jobType => ({
  type: FILTER_JOB_TYPES,
  payload: jobType,
});

export const fetchJobs = () => async dispatch => {
  dispatch(getJobsRequest());
  try {
    const { data: jobs } = await jobService.getJobs();
    console.log('jobs', jobs);
    dispatch(getJobsSuccess(jobs));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(getJobsError(errorMsg));
  }
  // axios
  //   .get('/positions.json')
  //   .then(response => {
  //     const jobs = response.data;
  //     dispatch(getJobsSuccess(jobs));
  //   })
  //   .catch(error => {
  //     const errorMsg = error.message;
  //     dispatch(getJobsError(errorMsg));
  //   });
};
