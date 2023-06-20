const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');  //added by -Ethan

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
      minlength: 2,
      // match: 
    
    },
    age: {
      type: Number,
      maxLength: 3,
      trim: true,
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