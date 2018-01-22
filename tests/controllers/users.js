const request = require('supertest');
const {expect} = require('chai');
const app = require('../../src/app');
const {is, size} = require('sanctuary');


describe('UsersController', () => {
  describe('UsersController.getUsers', () => {
    it('should return an array of non zero length', ( done ) => {
      request(app)
        .get('/users')
        .expect(( res ) => {
          expect(is(Array, res.body)).to.be.true;
          expect(size(res.body)).not.to.be.equal(0);
        })
        .end(done)
    });
  })
});

