const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
  } = require('../../controllers/thought-controller');

// Set up GET All and POST at /api/users
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

module.exports = router;