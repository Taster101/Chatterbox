const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');  //added by -Ethan

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      Unique: true,
    },
    // email: {      //added by -Ethan
    //   type: String,
    //   required: true,
    //   unique: true,
    //   mathc: [/.+@.+\..+/, 'Must match an email address!'],
    // },
    password: {
      type: String,
      unique: true,
      // match: 
      // minlength: 5,

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

// set up pre-save middleware to create password  -Ethan
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
})

//compare the incoming password with the hashed password  -Ethan
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password); 
};

const User = model('User', userSchema);

module.exports = User;