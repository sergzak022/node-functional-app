const express = require('express');
const {
    getUsers, getUser, createUser
} = require('../controllers/users');

let usersRouter = express.Router();

usersRouter.get('/users', getUsers);
usersRouter.post('/users', createUser);

usersRouter.get('/users/:id', getUser);

usersRouter.delete('/users/:id', () => {});
usersRouter.patch('/users/:id', () => {});


module.exports = usersRouter;
