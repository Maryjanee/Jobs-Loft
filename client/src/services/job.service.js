import axios from './axios';

const token = process.env.REACT_APP_AUTH_TOKEN;

class JobService {
  // eslint-disable-next-line class-methods-use-this
  async getJobs() {
    // eslint-disable-next-line no-return-await
    return await axios.get('/api/jobs');
  }
}

export default new JobService();
