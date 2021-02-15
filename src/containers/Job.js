/* eslint-disable react/prop-types */

import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import loader from '../assets/5.gif';
import back from '../assets/back.svg';

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
    <div className="container m-1">
      <Link to="/" className="back">
        <img src={back} alt="back" id="arrow" />
        Back to all Jobs
      </Link>
      <div>
        {pending && <img src={loader} alt="loader" />}
        {job && (
        <div className="single-details d-grid more-info">
          <div className="more-info">
            <h2 className="single-job-title">{job.title}</h2>
            <span dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>
          <div className="single-job-info">
            <button type="button" id="apply-btn">Apply Now</button>
            <div>
              <div>
                <p className="uppercase">Location</p>
                <p className="capsule">{job.location}</p>
              </div>
              <div>
                <p className="uppercase">Category</p>
                <p className="capsule">Software Development</p>
              </div>
              <div>
                <p className="uppercase">Posted</p>
                <p className="capsule">12 days ago</p>
              </div>
            </div>
          </div>
        </div>
        )}

      </div>
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
