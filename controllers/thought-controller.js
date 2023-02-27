const { Thought, User} = require("../models");

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
  createThought({ body, params }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          //receive back the User info with the updated array/new thought
          { new: true }
        );
      })
      .then((dbData) => res.json(dbData))
      .catch((err) => res.status(400).json(err));
  },

  //Update a thought by its ID (PUT /api/thoughts/:ID)
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
      new: true,
      runValidators: true,
    })
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
        return res.status(404).json({ message: "No thought with this id!" });
      }
      return User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { thoughts: params.thoughtId } },
        { new: true }
      );
    })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No User found with this id!" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => res.json(err));
},

  //Create a reaction to a Thought, stored in that thought's reactions array  (POST /api/thoughts/:thoughtId/reactions)
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No Thoughts found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.json(err));
  },

  //Remove a reaction by its ID    (DELETE /api/thoughts/:thoughtId/:reactionId)
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbData) => res.json(dbData))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
