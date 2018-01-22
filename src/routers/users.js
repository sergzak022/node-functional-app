const express = require('express');
const {
    getUsers, getUser, createUser, deleteUser, updateUser
} = require('../controllers/users');

let usersRouter = express.Router();

usersRouter.get('/users', getUsers);
usersRouter.post('/users', createUser);

usersRouter.get('/users/:id', getUser);

usersRouter.delete('/users/:id', deleteUser);
usersRouter.patch('/users/:id', updateUser);


module.exports = usersRouter;
