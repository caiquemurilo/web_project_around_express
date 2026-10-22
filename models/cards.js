import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
name: {
  type: String,
  minlength: 2,
  maxlength: 30,
  required: true,
},
link: {
  type: String,
  required: true,
  validate: {
    validator(v) {
      return /^(http|https):\/\/(www\.)?[a-zA-Z0-9\-_.~:/?%#[\]@!$&'()*+,;=]+#?$/.test(v);
    },
    message: 'Invalid URL format',
  },
},
owner: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required: true,
},
likes: {
 type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  default: [],
},
createdAt: {
  type: Date,
  default: Date.now,}
});

const Card = mongoose.model('Card', cardSchema);
export default Card;