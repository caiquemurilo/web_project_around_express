import Card from '../models/cards.js';

export const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find({});
    res.json(cards);
  } catch (err) {
    next(err);
  }
};

export const createCard = async (req, res) => {
  const {name, link} = req.body;
  const owner = req.user._id;
  try {
    const card = await Card.create({name, link, owner});
    res.status(201).json(card);
  } catch (err) {
    res.status(400).send({ message: 'Invalid data provided' });
  }
};

export const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.cardId);
    if (!card) {
      return res.status(404).send({ message: 'Card not found' });
    }
    res.status(200).send({ message: 'Card deleted successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Invalid data provided' });
  }
};