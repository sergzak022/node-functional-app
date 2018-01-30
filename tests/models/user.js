const {hasValidUserProps} = require('../../src/models/user');
const {expect} = require('chai');

describe('UserModel', () => {
  describe('hasValidUserProps', () => {
    it('should return true if valid props passed', () => {
      let actualRes = hasValidUserProps({
        email: 'kot@gmail.com',
        password: 'slkdfslfksjf234l2k4j'
       });
      expect(actualRes).to.equal(true);
    });
    it('should return false if at least one prop is invalid', () => {

      let invalidEmailRes = hasValidUserProps({
        email: '',
        password: 'slkdfslfksjf234l2k4j'
       });

      let invalidPassRes = hasValidUserProps({
        email: 'kot@gmail.com',
        password: ''
       });

      expect(invalidEmailRes).to.equal(false);
      expect(invalidPassRes).to.equal(false);

    });
  });
});
