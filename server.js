const path = require('path');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/jobs', async (req, res) => {
  try {
    const { data: jobs } = await axios.get('https://jobs.github.com/positions.json');
    res.send(jobs);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

if (process.env.NODE_ENV === 'production') {
  // Serve static files
  app.use(express.static(path.join(__dirname, 'build')));

  // Handle react routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
