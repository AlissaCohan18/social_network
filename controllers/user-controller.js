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

  //TODO: get a user by ID (GET /api/users/:id)
//getUserById({})

  //create User   (POST /api/users)
  createUser({ body }, res) {
    User.create(body)
      .then((dbData) => res.json(dbData))
      .catch((err) => res.status(400).json(err));
  },

//TODO: update a user by ID (PUT /api/users/:id)
//updateUser({})

//TODO: Delete a user by ID (DELETE /api/users/:id)
deleteUser({ params }, res) {
  User.findOneAndDelete({ _id: params.id })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No User found with this id!" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => res.status(400).json(err));
},

//TODO: add new friend to user's friend list (POST /api/users/:userId/friends/:friendId)
//addFriend({})

//TODO: delete a friend from a user's friend list (DELETE /api/users/:userId/friends/:friendId)
//removeFriend({})
};

module.exports = userController;
