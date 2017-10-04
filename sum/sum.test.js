const assert = require('assert');
const sum = require('./sum');

describe('Sum', () =>  {

  it('calculates 4 + 3 equal to 7', () => {
    assert.equal(sum(4, 3), 7);
  });

  it('calculates undefined + undefined equal to 0', () => {
    assert.equal(sum(undefined, undefined), 0);
  });

});
