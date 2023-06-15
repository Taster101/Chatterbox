const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    commet: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,

    },
    createdAt: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
      get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),

    },

    commentAuthur: {
        type: String,
        ref: `User`
   
      user: {
      type: String,
      ref: `User`

    }

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


module.exports = commentSchema;