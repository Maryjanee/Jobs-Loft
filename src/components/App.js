/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/App.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import JobList from '../containers/JobList';
import Job from '../containers/Job';
import Header from './Header';
import { fetchJobs } from '../actions';

const App = ({ fetchJobs }) => {
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={JobList} />
        <Route path="/job/:jobId" component={Job} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => (
  {
    fetchJobs: () => dispatch(fetchJobs()),
  }

);

export default connect(null, mapDispatchToProps)(App);
