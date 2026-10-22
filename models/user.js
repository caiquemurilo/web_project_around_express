import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
name: {
  type: String,
  minlength: 2,
  maxlength: 30,
  required: true,
},
about: {
  type: String,
  minlength: 2,
  maxlength: 30,
  required: true,
},
avatar: {
  type: String,
  required: true,
  validate: {
    validator(v) {
      return /^(http|https):\/\/(www\.)?[a-zA-Z0-9\-_.~:/?%#[\]@!$&'()*+,;=]+#?$/.test(v);
    },
    message: 'Invalid URL format',
  },
},

});

const User = mongoose.model('user', userSchema);
export default User;