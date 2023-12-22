/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const credentials = {
  password: 'm295',
};

router.post('/login', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  if (!email || !password) {
    console.log('Error 422, Email and Password required');
    return res.status(422).json({ error: '422, Email and Password required' });
  }
  if (password === credentials.password) {
    req.session.email = email;
    return res.status(201).json({ email: req.session.email });
  }
  console.log('Error 401: Not logged in');
  return res.status(401).json({ error: '401, Not logged in' });
  // #swagger.summary = 'Login'
  // #swagger.description = 'Use a POST request with the email and password in a JSON-Body'
});
router.get('/verify', (req, res) => {
  if (req.session.email) {
    return res.status(200).json({ email: req.session.email });
  }
  console.log('Error 401: Not logged in');
  return res.status(401).json({ error: '401, Not logged in' });
  // #swagger.summary = 'Verify'
  // #swagger.description = 'Use a GET request to check the status of the client'
});

router.delete('/logout', (req, res) => {
  if (req.session.email) {
    // Reset Cookie
    req.session.email = null;

    return res.send('Logout successful').status(204);
  }

  return res.status(401).json({ error: 'Not logged in' });
  // #swagger.summary = 'Logout'
  // #swagger.description = 'Use a Delete request to log out'
});

module.exports = router;
