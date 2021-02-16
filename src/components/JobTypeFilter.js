import PropTypes from 'prop-types';

const jobTypes = [
  'Full Time',
  'Part Time',
  'Contract',
  'Internship',
];

const JobTypeFilter = ({ handleFilterChange }) => {
  const handleChange = event => {
    const { value } = event.target;
    handleFilterChange(value);
  };

  return (
    <div>
      <label htmlFor="jobType">
        Select a Job Type
        <select
          name="jobType"
          id="jobType"
          onChange={handleChange}
        >
          <option value="">All</option>
          {jobTypes.map(jobType => (
            <option key={jobType} value={jobType}>
              {jobType}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

JobTypeFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default (JobTypeFilter);
