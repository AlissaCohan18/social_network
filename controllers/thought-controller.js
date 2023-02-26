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
  
       //create Thought   (POST /api/thoughts)
    createThought({ body }, res) {
      Thought.create(body)
        .then((dbData) => res.json(dbData))
        .catch((err) => res.status(400).json(err));
    },
    

  };
  
  module.exports = thoughtController;
  