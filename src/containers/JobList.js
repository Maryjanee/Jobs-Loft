/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { connect } from 'react-redux';

const JobList = ({
  jobs, error, pending,
}) => (pending
  ? (<h2>Loading</h2>) : error
    ? (<h2>{error}</h2>)
    : (
      <div>
        <h2>Jobs List</h2>
        <div>
          {
      jobs.map(job => (<p key={job.name}>{job.name}</p>))
      }
        </div>
      </div>
    ));

const mapStateToProps = state => (
  {
    jobs: state.jobReducer.jobs,
    pending: state.jobReducer.pending,
    error: state.jobReducer.error,
  }
);

export default connect(mapStateToProps)(JobList);
