exports.getUsers = ( req, res ) => {
  res
    .status(200)
    .json([{email: 'ivandrago@gmail.com'}]);
};

exports.getUser = ( req, res ) => {
  throw new Error('Not implemented');
};

exports.createUser = ( req, res ) => {
  throw new Error('Not implemented');
};
