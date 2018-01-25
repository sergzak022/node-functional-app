const {expect} = require('chai');
const {getUsers, getFakeUser} = require('../../src/utils/seed');

describe('seed', () => {

  describe('getUsers', () => {
    it('should return 10 users', () => {
      expect(getUsers(10).length).to.equal(10);
    });
  });

  describe('getFakeUser', () => {

    it('should set passed argument to `id` field', () => {
      let id = '100';
      let fakeUser = getFakeUser(id);
      expect(fakeUser.id).to.equal(id);
    });

    it('should return a user with password user properties', () => {
      let fakeUser = getFakeUser(10);
      expect(fakeUser.password).to.exist;
      expect(fakeUser.email).to.exist;
    });
  });

});
