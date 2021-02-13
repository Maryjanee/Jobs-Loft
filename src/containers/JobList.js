/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loader from '../assets/5.gif';

const JobList = ({
  jobs, error, pending, categories,
}) => (
  <div>
    <h2>Job List</h2>

    <div>
      {pending && <img src={loader} alt="loader" />}
      {!pending && error && <h3>{error}</h3>}
      {!pending && !error && jobs.map(job => (
        <Link to={`job/${job.id}`} key={job.id}>
          <div>
            <p>{job.title}</p>

          </div>

        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  jobs: state.jobReducer.jobs,
  pending: state.jobReducer.pending,
  error: state.jobReducer.error,
  categories: state.jobReducer.categories,
});

export default connect(mapStateToProps)(JobList);
