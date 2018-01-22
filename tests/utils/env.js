const {expect} = require('chai');
const env = require('../../src/utils/env');

describe('env', () => {
  describe('env.isDevelopment', () => {
    it('should return false if in production', () => {
      env.forceProduction();
      expect(env.isDevelopment()).to.be.equal(false);
    });

    it('should return true if in development', () => {
      env.forceDevelopment();
      expect(env.isDevelopment()).to.be.equal(true);
    })
  });

  describe('env.isProduction', () => {
    it('should return true if in production', () => {
      env.forceProduction();
      expect(env.isProduction()).to.be.equal(true);
    });

    it('should return false if in development', () => {
      env.forceDevelopment();
      expect(env.isProduction()).to.be.equal(false);
    })
  });
})
