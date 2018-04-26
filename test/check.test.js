'use strict';
const expect = require('chai').expect;
const check = require('../check')

describe('[Check] ifNull', () => {
  it('Return [True] if the input is [null]', () =>  {
    expect(check.ifNull(null)).to.be.equal(true);
  });
  it('Return [True] if the input is [undefined]', () =>  {
    expect(check.ifNull(undefined)).to.be.equal(true);
  });
  it('Return [True] if the input is [""]', () =>  {
    expect(check.ifNull('')).to.be.equal(true);
  });
  it('Return [False] if the input is [123]', () =>  {
    expect(check.ifNull(123)).to.be.equal(false);
  });
});


let sampleARR = [1,2,3,4,5,6]

describe('[Check] arrayLength', () => {
  it('Return [0] if the input is [null]', () =>  {
    expect(check.arrayLength(null)).to.be.equal(0);
  });
  it('Return [0] if the input is [undefined]', () =>  {
    expect(check.arrayLength(undefined)).to.be.equal(0);
  });
  it('Return [Number] if the input is [Array]', () =>  {
    expect(check.arrayLength(sampleARR)).to.be.a('number');
  });
});