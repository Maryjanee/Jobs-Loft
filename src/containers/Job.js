/* eslint-disable react/prop-types */

// TODO: bring in pending
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const Job = ({ jobs }) => {
  const { jobId } = useParams();
  const [job, setJob] = useState();

  useEffect(() => {
    if (jobId) {
      const matchedJob = jobs.find(job => job.id === jobId);
      setJob(matchedJob);
    }
  }, [jobs]);
  return job && (
    <div>
      {job.title}
    </div>
  );
};

const mapStateToProps = state => (
  {
    jobs: state.jobReducer.jobs,
  }
);

export default connect(mapStateToProps)(Job);
