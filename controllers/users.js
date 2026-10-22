import User from '../models/users.js';

export const getUsers = async (req, res, next) => {
  try {
    const usersData = await User.find({});
    res.json(usersData);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const { name, about, avatar } = req.body;
  try {
    const user = await User.create({ name, about, avatar });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};