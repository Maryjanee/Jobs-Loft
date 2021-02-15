/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loader from '../assets/5.gif';

const JobList = ({
  jobs, error, pending,
}) => (
  <section id="job-list" className="container">
    <div className="d-flex">
      <h2>Job List</h2>
      <select>
        <option value="">Pick A Category</option>
        <option value="All">All</option>
        <option value="breakfast">BreakFast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

    </div>

    <div>
      {pending && <img className="center" src={loader} alt="loader" />}
      {!pending && error && <h3>{error}</h3>}
      {!pending && !error && jobs.map(job => (
        <Link to={`job/${job.id}`} key={job.id}>

          <div className="card-container d-grid">

            <div className="job-details d-grid">

              <div className="company-logo">
                <img src={job.company_logo} alt="logo" />
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
              <p className="created-at">2d</p>
            </div>

          </div>

        </Link>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  jobs: state.jobReducer.jobs,
  pending: state.jobReducer.pending,
  error: state.jobReducer.error,
  categories: state.jobReducer.categories,
});

export default connect(mapStateToProps)(JobList);
