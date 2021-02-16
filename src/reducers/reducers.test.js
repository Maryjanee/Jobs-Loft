import jobsReducer from './jobs'
import {
    GET_JOBS_ERROR, GET_JOBS_SUCCESS, GET_JOBS_REQUEST, FILTER_JOB_TYPES,
  } from '../types';
import filterReducer from './filter';

describe ('Filter Reducer', ()=>{
    it('should return the default state when there is no action match', () =>{
     const newState = filterReducer(undefined, {});
     expect(newState).toEqual( {"filter": ""})
    })
    it('should return a new state when there is an action match', () =>{
        const jobType = 'Contract'
        const newState = filterReducer(undefined, 
            {
                type: FILTER_JOB_TYPES,
                payload: jobType,
              });

        expect(newState).toEqual( {"filter": 'Contract'})
       })
});

describe ('Job Reducer', ()=>{
    it('should return the default state when there is no action match', () =>{
     const newState = jobsReducer(undefined, {});
     expect(newState).toEqual( {
        pending: false,
        jobs: [],
        error: null,
       
      })
    })
    it('should return a new state when there is an action match', () =>{
        const job = [{
            
id: "ee163ad3-116c-49ec-bfd6-cabec6b88e13",
type: "Full Time",
created_at: "Mon Feb 15 15:07:11 UTC 2021",
company: "Humanoo ",
company_url: "http://humanoo.com",
location: "Berlin ",
description: 'A full stack developer'
} ];

const initialState = {
    pending: false,
    jobs: [],
    error: null,
  };
        const newState = jobsReducer(initialState, 
            {
                type: GET_JOBS_SUCCESS,
                payload: job,
              });

        expect(newState).toEqual( {
            pending:false,
            jobs:[...job],
            error:"",
        })
       })
});
