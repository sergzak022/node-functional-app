const {expect} = require('chai');
const knex = require('../../db');

describe('db', () => {
  it('should exist', () => {
    expect(knex).to.exist;
  })
})
