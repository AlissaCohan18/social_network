const { Thought } = require("../models");

const thoughtController = {
  //get all thoughts (GET /api/thoughts)
  getAllThoughts(req, res) {
    Thought.find({})
      .then((dbData) => res.json(dbData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //Get a single thought by ID (GET /api/thoughts/:ID)
getSingleThought({ params }, res) {
  Thought.findOne({ _id: params.thoughtId })
    .then((dbData) => {
      // If no Thought is found, send 404
      if (!dbData) {
        res.status(404).json({ message: "No Thought found with this id!" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
},

  //create Thought   (POST /api/thoughts)
  //TODO:  (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbData) => res.json(dbData))
      .catch((err) => res.status(400).json(err));
  },

  //Update a thought by its ID (PUT /api/thoughts/:ID)
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
      .then((dbData) => {
        // If no Thought is found, send 404
        if (!dbData) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //Delete a thought by its ID (DELETE /api/thoughts/:ID)
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        res.json(deletedThought);
      })
      .catch((err) => res.status(400).json(err));
  },

  //TODO: create a reaction stored in a single thought's reactions array field
    //(POST /api/thoughts/:thoughtId/reactions)
//createReaction({})

  //TODO: pull and remove a reaction by the reaction's reactionId value
    //(DELETE /api/thoughts/:thoughtId/reactions)
//deleteReaction({})

  };

module.exports = thoughtController;
