const { getUsers } = require('../models/user');

exports.getUsers = ( req, res ) => {
  console.log('getUsers');

  getUsers()
    .then(( users ) => {

      console.log('getUsers resolves');

      res.json({
        data: users,
        errors: []
      });
    });

};

exports.getUser = ( req, res ) => {

};

exports.createUser = ( req, res ) => {

};

exports.deleteUser = ( req, res ) => {

};

exports.updateUser = ( req, res ) => {

};
