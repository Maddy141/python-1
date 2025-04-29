const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Mock variables to simulate AC status
let acState = {
  power: false,
  temperature: 24,
  fanSpeed: 1
};

// Turn AC ON/OFF
app.post('/ac/power', (req, res) => {
  const { power } = req.body;
  acState.power = power;
  console.log(`AC Power set to: ${power}`);
  res.send({ status: 'success', acState });
});

// Set Temperature
app.post('/ac/temp', (req, res) => {
  const { temperature } = req.body;
  acState.temperature = temperature;
  console.log(`Temperature set to: ${temperature}`);
  res.send({ status: 'success', acState });
});

// Set Fan Speed
app.post('/ac/fan', (req, res) => {
  const { fanSpeed } = req.body;
  acState.fanSpeed = fanSpeed;
  console.log(`Fan speed set to: ${fanSpeed}`);
  res.send({ status: 'success', acState });
});

// Get Current AC Status
app.get('/ac/status', (req, res) => {
  res.send({ status: 'success', acState });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Car AC server running on port ${PORT}`);
});
