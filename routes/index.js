const router = require('express').Router();

// Import API routes from /api/index.js
const apiRoutes = require('./api');

// add prefix of `/api` to api routes imported from the `api` directory
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;