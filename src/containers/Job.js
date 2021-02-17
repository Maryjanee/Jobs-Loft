import PropTypes from 'prop-types';

import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import loader from '../assets/loading.svg';
import back from '../assets/back.svg';
import daysDiff from '../helpers/daysDiff';
import ago from '../helpers/ago';

const Job = ({ jobs, pending }) => {
  const { jobId } = useParams();
  const [job, setJob] = useState();
  const posted = date => `${ago(daysDiff(date))}`;

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
        {pending && <img src={loader} className="center" alt="loader" />}
        {job && (
        <div className="single-details d-grid">
          <div className="more-info">
            <p className="single-job-title">{job.title}</p>
            <span dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>
          <div className="single-job-info">
            <a href={job.company_url} id="apply-btn" target="_blank" rel="noreferrer">
              Company Website
            </a>
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
                <p className="capsule">{posted(job.created_at)}</p>
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

Job.propTypes = {
  jobs: PropTypes.instanceOf(Array).isRequired,
  pending: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Job);
