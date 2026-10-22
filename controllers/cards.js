import Card from '../models/card.js';

export const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find({});
    res.json(cards);
  } catch (err) {
    next(err);
  }
};

export const createCard = async (req, res, next) => {
  const {name, link} = req.body;
  const owner = req.user._id;
  try {
    const card = await Card.create({name, link, owner});
    res.status(201).json(card);

  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ message: 'Invalid data provided' });
    }
    next(err);
  }
};

export const deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.cardId)
    .orFail(() => {
        const error = new Error('Card not found');
        error.statusCode = 404;
        throw error;
      });
    res.status(200).send({ message: 'Card deleted successfully' });
  } catch (err) {
        if (err.statusCode === 404) {
      return res.status(404).send({ message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'Invalid card ID format' });
    }
    next(err);
  }
};

export const likeCard = async (req, res, next) => {
try {
const card = await Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true }
)
.orFail(() => {
  const error = new Error('Card not found');
  error.statusCode = 404;
  throw error;

})
res.status(200).json(card)
} catch (err) {
    if (err.statusCode === 404) {
      return res.status(404).send({ message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'Invalid card ID format' });
    }

  next(err);
}
}

export const unlikeCard = async (req, res, next) => {
  try {
const card = await Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true }
)
.orFail(() => {
  const error = new Error('Card not found');
  error.statusCode = 404;
  throw error;

})
res.status(200).json(card)
} catch (err) {
    if (err.statusCode === 404) {
      return res.status(404).send({ message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'Invalid card ID format' });
    }

  next(err);
}
}