import User from '../models/user.js';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({})

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id)
        .orFail(() => {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
      });
    res.status(200).json(user);
  } catch (err) {
    if (err.statusCode === 404) {
      return res.status(404).send({ message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'Invalid user ID format' });
    }
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const { name, about, avatar } = req.body;
  try {
    const user = await User.create({ name, about, avatar });
    res.status(201).json(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ message: 'Invalid data provided' });
    }
    next(err);
  }
};

export const updateProfile = async (req, res, next) => {
const { name, about } = req.body;
try {
        const user = await User.findByIdAndUpdate(req.user._id,
          { name, about },
          { new: true,
            runValidators: true
           })
          .orFail(() => {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
      });
      res.status(200).json(user);
} catch(err) {
    if (err.statusCode === 404) {
      return res.status(404).send({ message: err.message });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).send({ message: 'Invalid data provided' });
    }
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'Invalid user ID format' });
    }
    next(err);
}
}

export const updateAvatar = async (req, res, next) => {
const { avatar } = req.body;
try {
        const user = await User.findByIdAndUpdate(req.user._id,
          { avatar },
          { new: true,
            runValidators: true
           })
          .orFail(() => {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
      });
      res.status(200).json(user);
} catch(err) {
    if (err.statusCode === 404) {
      return res.status(404).send({ message: err.message });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).send({ message: 'Invalid data provided' });
    }
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'Invalid user ID format' });
    }
    next(err);
}
}