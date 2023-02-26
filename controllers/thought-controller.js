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

  //TODO: get a single thought by ID (GET /api/thoughts/:ID)

  //create Thought   (POST /api/thoughts)
  //TODO:  (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbData) => res.json(dbData))
      .catch((err) => res.status(400).json(err));
  },

  //TODO: update a thought by its ID (PUT /api/thoughts/:ID)

  //TODO: Delete a thought by its ID (DELETE /api/thoughts/:ID)

  //TODO: create a reaction stored in a single thought's reactions array field
    //(POST /api/thoughts/:thoughtId/reactions)

  //TODO: pull and remove a reaction by the reaction's reactionId value
    //(DELETE /api/thoughts/:thoughtId/reactions)


  };

module.exports = thoughtController;
