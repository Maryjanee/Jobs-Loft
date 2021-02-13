/* eslint-disable react/prop-types */

import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import loader from '../assets/5.gif';

const Job = ({ jobs, pending }) => {
  const { jobId } = useParams();
  const [job, setJob] = useState();

  useEffect(() => {
    if (jobId) {
      const matchedJob = jobs.find(job => job.id === jobId);
      setJob(matchedJob);
    }
  }, [jobs]);
  return (
    <div>
      {pending && <img src={loader} alt="loader" />}
      {job && (
      <div>
        {job.title}
        {<span dangerouslySetInnerHTML={{ __html: job.description }} />}
      </div>
      )}

    </div>
  );
};

const mapStateToProps = state => (
  {
    jobs: state.jobReducer.jobs,
    pending: state.jobReducer.pending,
  }
);

export default connect(mapStateToProps)(Job);
