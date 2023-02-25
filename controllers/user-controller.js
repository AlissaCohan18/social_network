const { User } = require("../models");


const userController = {
  
    //get all users (GET /api/users)
    getAllUsers(req, res) {
      User.find({})
        .then((dbData) => res.json(dbData))
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
       //create User   (POST /api/users)
    createUser({ body }, res) {
      User.create(body)
        .then((dbData) => res.json(dbData))
        .catch((err) => res.status(400).json(err));
    },
    

  };
  
  module.exports = userController;
  