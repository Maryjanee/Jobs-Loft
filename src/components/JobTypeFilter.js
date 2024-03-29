import React from 'react';
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
    <div data-test="jobFilter">
      <select
        name="jobType"
        id="jobType"
        onChange={handleChange}
        data-test="jobType"
      >
        <option value="">Select a Job Type</option>
        {jobTypes.map(jobType => (
          <option key={jobType} value={jobType}>
            {jobType}
          </option>
        ))}
      </select>
    </div>
  );
};

JobTypeFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default (JobTypeFilter);
