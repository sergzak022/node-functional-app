const { getUsers, getUserById } = require('../models/user');

exports.getUsers = ( req, res ) => {
  getUsers()
    .then(( users ) => {
      res.json({
        users,
        errors: []
      });
    });

};

exports.getUser = ( req, res ) => {
  // TODO: function that extracts propety from params
  let userId = req.params && req.params.id;

  getUserById( userId )
    .then( ( [ user ] ) => {
      if (user) {
        res.json({
          user,
          errors: []
        });
      } else {
        res.json({
          user: null,
          errors: ['Can not find user with given id']
        });
      }
    })
};

exports.createUser = ( req, res ) => {

};

exports.deleteUser = ( req, res ) => {

};

exports.updateUser = ( req, res ) => {

};
