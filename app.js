import express from 'express';
import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';

const app = express();
const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({"message": "Route not found"});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({"message": "An error occurred on the server"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});