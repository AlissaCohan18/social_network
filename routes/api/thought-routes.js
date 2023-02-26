const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
  //  createReaction,
  //  deleteReaction,
  } = require('../../controllers/thought-controller');

// Set up routes at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)


// Set up routes at /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

// Set up routes at /api/thoughts/:thoughtId/:reactionId
//router
  //.route('/:thoughtId/:reactionId')
 // .post(createReaction)
 // .delete(deleteReaction)

module.exports = router;