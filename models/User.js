//import Schema
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
      unique: true,
      match: /.+\@.+\..+/,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      //ref property to tell User model which docs to search
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
