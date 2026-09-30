import express from 'express';
import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';

const app = express();
const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});