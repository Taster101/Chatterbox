const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      Unique: true,
    },
    password: {
      type: String,
      unique: true,
      // match: 

    },
    age: {
      type: Number,
    },

    memory: [{
      type: Schema.Types.ObjectId,
      ref: `memory`,
    }],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;