const {expect} = require('chai');
const { getParam } = require('../../src/utils/express-request');

describe('express-request', () => {
  describe('getParam', () => {
    it('should return a value at a key of params', () => {
      let expected = '10';
      let actaul = getParam('id', {params: {id: expected}});

      expect(actaul).to.equal(expected);
    });

  });
})
