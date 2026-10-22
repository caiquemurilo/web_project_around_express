import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/aroundb');

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
  console.error(err.stack);
  res.status(500).send({ message: 'An error occurred on the server' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});