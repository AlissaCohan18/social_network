const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
  deleteThoughtOLD,
} = require("../../controllers/thought-controller");

// Set up routes at /api/thoughts
router
  .route("/")
  .get(getAllThoughts)
  
// /api/thoughts/:userId
  router
  .route("/:userId")
  .post(createThought);
  
// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
 
// /api/thoughts/:userId/:thoughtId 
router
  .route("/:userId/:thoughtId")
  .delete(deleteThought)

//  /api/thoughts/:thoughtId/reaction
router
  .route("/:thoughtId/reaction")  
  .put(addReaction);

//  /api/thoughts/:thoughtId/reaction/:reactionId
router
  .route("/:thoughtId/reaction/:reactionId")
  .delete(removeReaction);

module.exports = router;
