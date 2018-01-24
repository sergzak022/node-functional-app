const request = require('supertest');
const {expect} = require('chai');
const app = require('../../src/app');
const {is, size} = require('sanctuary');
const usersController = require('../../src/controllers/users');
const {TEST_USER_ID, getTestUser} = require('../../src/utils/seed');


describe('UsersController', () => {

  describe('UsersController.getUsers', () => {
    it('should exist', () => {
      expect(usersController.getUsers).to.exist;
    });

    it('should return an array of non zero length', ( done ) => {

      request(app)
        .get('/users')
        .expect(( res ) => {

          expect(is(Array, res.body.users)).to.be.true;
          expect(size(res.body.users)).not.to.be.equal(0);

        })
        .end(done)

    });

  });


  describe('UsersController.getUser', () => {

    it('should exist', () => {
      expect(usersController.getUser).to.exist;
    });

    it('should return a valid user for valid id', ( done ) => {
      request(app)
        .get(`/users/${TEST_USER_ID}`)
        .expect(( res ) => {
          let actaulEmail = res.body.user.email;
          let expectedEmail = getTestUser().email;
          expect(actaulEmail).to.equal(expectedEmail);
        })
        .end(done)
    });

    it('should return an error if can not find user', ( done ) => {
      request(app)
        .get('/users/200')
        .expect(( res ) => {

          expect(is(Array, res.body.errors)).to.be.true;
          expect(size(res.body.errors)).not.to.be.equal(0);

        })
        .end(done)
    });

  });

});

