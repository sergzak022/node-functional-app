const S = require('sanctuary');
const { internet: { password, email } } = require('faker');

const TEST_USER_ID = 5;

exports.TEST_USER_ID = TEST_USER_ID;

exports.getUsers = getUsers;
exports.getTestUser = getTestUser;


function getUsers( count ) {
  return S.range(0, count).map((id) =>
    id === TEST_USER_ID
      ? getTestUser(id)
      : getFakeUser(id)
  );
}

function getTestUser ( id ) {
  return { id, email: 'test@gmail.com', password: 'password'};
}

function getFakeUser( id ) {
  return {
    id,
    email: email(),
    password: password()
  };
}
