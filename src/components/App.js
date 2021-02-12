/* eslint-disable react/prop-types */
import '../styles/App.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import JobList from '../containers/JobList';
import Job from '../containers/Jobs';
import Header from './Header';
import { fetchJobs } from '../actions';
import CategoryFilter from './CategoryFilter';

const App = ({ fetchJobs }) => {
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <Header />
      <CategoryFilter />
      <Switch>
        <Route path="/" exact component={JobList} />
        <Route path="/job/:job" component={Job} />
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
