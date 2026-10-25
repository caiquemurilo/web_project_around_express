import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';

const app = express();
const { PORT = 3000 } = process.env;

try {
  await mongoose.connect('mongodb://localhost:27017/aroundb');
  console.log('Connected to MongoDB');
} catch (err) {
  console.error('Error connecting to MongoDB:', err);
}

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6ad95f44de99245f384689ec'
  };

  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // Handling Document Not Found (404 created with .orFail)
  if (err.statusCode === 404) {
    return res.status(404).send({ message: err.message });
  }

  // Handling Mongoose CastError (400) - usually invalid IDs
  if (err.name === 'CastError') {
    return res.status(400).send({ message: 'Invalid ID format' });
  }

  // Handling Mongoose ValidationError (400)
  if (err.name === 'ValidationError') {
    return res.status(400).send({ message: 'Invalid data provided' });
  }

  // Default server error (500)
  console.error(err.stack);
  res.status(500).send({ message: 'An error occurred on the server' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});