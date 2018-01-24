const User = require('../models/user');
const {getParam} = require('../utils/express-request');
const {ifElse} = require('sanctuary');

exports.getUsers = getUsers;
exports.getUser = getUser;


function getUsersJson( users ) {
  return {
    users,
    errors: []
  };
}

function getUsers ( req, res ) {
  User.getUsers()
    .then(( users ) => {
      res.json(getUsersJson(users));
    });
}

function getUser ( req, res ) {

  let userId = getParam('id', req);

  User.getUserById( userId )
    .then(handleGetUserSuccess(res))
}

function handleGetUserSuccess (res) {
  return ifElse(
    ( [user] ) => !!user,
    ( [user] ) => {
      res.json(getUserJson(user));
    },
    () => {
      res.json(getNoUserJson());
    }
  );
}

function getUserJson( user ) {
  return {
    user,
    errors: []
  };
}

function getNoUserJson( user ) {
  return {
    user: null,
    errors: ['Can not find user with given id']
  };
}

exports.createUser = ( req, res ) => {

};

exports.deleteUser = ( req, res ) => {

};

exports.updateUser = ( req, res ) => {

};
