const assert = require('assert');
const factorial = require('./factorial');

describe('Factorial', () =>  {

  it('equals to 1 when 0 is given', () => {
    assert.equal(factorial(0), 1);
  });

});
