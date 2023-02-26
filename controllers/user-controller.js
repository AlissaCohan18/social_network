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

  //TODO: get a user by ID (GET /api/users/:ID)


  //create User   (POST /api/users)
  createUser({ body }, res) {
    User.create(body)
      .then((dbData) => res.json(dbData))
      .catch((err) => res.status(400).json(err));
  },

//TODO: update a user by ID (PUT /api/users/:ID)


//TODO: Delete a user by ID (DELETE /api/users/:ID)

//TODO: add new friend to user's friend list (POST /api/users/:userId/friends/:friendId)

//TODO: delete a friend from a user's friend list (DELETE /api/users/:userId/friends/:friendId)

};

module.exports = userController;
