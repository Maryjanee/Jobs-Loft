import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import loader from '../assets/loading.svg';
import logo from '../assets/logo.png';
import { filterJobTypes } from '../actions/job.action';
import JobTypeFilter from '../components/JobTypeFilter';
import daysDiff from '../helpers/daysDiff';
import ago from '../helpers/ago';

const JobList = ({
  jobs, error, pending, filter, handleFilterChange,
}) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const posted = date => `${ago(daysDiff(date))}`;

  const handleFilter = category => {
    handleFilterChange(category);
  };

  useEffect(() => {
    const filtered = filter
      ? jobs.filter(job => job.type === filter)
      : jobs;
    setFilteredJobs(filtered);
  }, [jobs, filter]);

  return (

    <section id="job-list" className="container">
      <div className="d-flex align-center lead-container m-1">
        <h3>Job List</h3>
        <JobTypeFilter handleFilterChange={handleFilter} />

      </div>

      <div>
        {pending && <img className="center" src={loader} alt="loader" />}
        {!pending && error && <h3>{error}</h3>}
        {!pending && !error && filteredJobs.map(job => (
          <Link to={`job/${job.id}`} key={job.id}>

            <div className="card-container d-grid">

              <div className="job-details d-grid">

                <div className="company-logo">
                  {
                    job.company_logo ? <img src={job.company_logo} alt="logo" /> : <img src={logo} alt="logo" />
                  }
                </div>
                <div className="company-info">
                  <p className="job-title">{job.title}</p>
                  <p className="company-name">{job.company}</p>
                  <p className="location capsule">{job.location}</p>

                </div>

              </div>

              <div className="tags d-flex">
                <p className="capsule">Javascript</p>
                <p className="capsule">React</p>
                <p className="capsule">C#</p>
                <p className="capsule">Rails</p>
                <p className="capsule">SQL</p>
              </div>

              <div className="d-flex last-details">
                <p className="job-tag capsule">Software Development</p>
                <p className="created-at">{posted(job.created_at)}</p>
              </div>

            </div>

          </Link>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  jobs: state.jobReducer.jobs,
  pending: state.jobReducer.pending,
  error: state.jobReducer.error,
  filter: state.filterReducer.filter,

});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: category => dispatch(filterJobTypes(category)),

});

JobList.defaultProps = {
  error: null,
};

JobList.propTypes = {
  jobs: PropTypes.instanceOf(Array).isRequired,
  pending: PropTypes.bool.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
