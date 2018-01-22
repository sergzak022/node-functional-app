const S = require('sanctuary');
const { internet: { password, email } } = require('faker');

exports.getUsers = function( count ) {
  return S.range(0, count).map((id) => ({
    id,
    email: email(),
    password: password()
  }));
}


