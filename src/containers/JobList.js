/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, error, pending }) => (
  <div>
    <h2>Job List</h2>
    <div>
      {pending && <h2>Loading</h2>}
      {!pending && error && <h3>{error}</h3>}
      {!pending && !error && jobs.map(job => (
        <Link to={`job/${job.id}`} key={job.id}>
          <p>{job.title}</p>
          {/* <span dangerouslySetInnerHTML={{ __html: job.description }} /> */}
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  jobs: state.jobReducer.jobs,
  pending: state.jobReducer.pending,
  error: state.jobReducer.error,
});

export default connect(mapStateToProps)(JobList);
