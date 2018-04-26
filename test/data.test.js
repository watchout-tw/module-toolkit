'use strict';
const chai = require('chai');
const expect = chai.expect;
const data = require('../data')

describe('[Data] rmNullItem', () => {
  let sampleArr = [{title: null},{title: 123}];
  it('The first element shoud be delete from sampleArr', () =>  {
    expect(data.rmNullItem('title',sampleArr)).to.have.lengthOf(1);
  });
});

describe('[Data] rmRepeatItemInArray', () => {
  let sampleArr = [1,1,2,3];
  it('The first element shoud be delete from sampleArr', () =>  {
    expect(data.rmRepeatItemInArray(sampleArr)).to.have.lengthOf(3);
  });
});

describe('[Data] parseJSON', () => {
  let targetArr = ['about'];
  let sample = [{
    about: '{"name":"watchout"}'
  }];
  it(' "sample.about" should be an Object', () =>  {
    let output = data.parseJSON(targetArr,sample);
    expect(output[0].about).to.be.an('object');
  });
});

describe('[Data] nullToArray', () => {
  let sample = [{
    about: null
  }];
  it(' "sample.about" should be an array ', () =>  {
    let output = data.nullToArray('about',sample);
    expect(output[0].about).to.be.an('array');
  });
});

describe('[Data] nullToEmptyArray', () => {
  let sample = [1,2,3];
  it('Return empty array if the input is [null]', () =>  {
    expect(data.nullToEmptyArray(null)).to.be.an('array').that.is.empty;
  });
  it('Return empty array if the input is [undefined]', () =>  {
    expect(data.nullToEmptyArray(undefined)).to.be.an('array').that.is.empty;
  });
  it('Return the original data if the input is an array', () =>  {
    expect(data.nullToEmptyArray(sample)).to.be.equal(sample);
  });
});

describe('[Data] nullToZero', () => {
  let sample = 123;
  it('Return 0 if the input is [null]', () =>  {
    expect(data.nullToZero(null)).to.be.equal(0);
  });
  it('Return 0 if the input is [undefined]', () =>  {
    expect(data.nullToZero(undefined)).to.be.equal(0);
  });
  it('Return the original number if the input is an array', () =>  {
    expect(data.nullToZero(sample)).to.be.equal(sample);
  });
});

describe('[Data] parseStrArray', () => {
  let sample = '1,2,3';
  it('Return empty array if the inout is null ', () =>  {
    expect(data.parseStrArray(null)).to.be.an('array').that.is.empty;
  });
  it('Turn to array from string', () =>  {
    expect(data.parseStrArray(sample)).to.be.an('array').that.have.lengthOf(3);
  });
});

describe('[Data] diffArray', () => {
  let currArr = [{ id: 1, name: 'A' },{ id: 2, name: 'B' }];
  let nextArr = [{ id: 1, name: 'A' },{ id: 3, name: 'C' },{ id: 4, name: 'D' }];
  let output = data.diffArray({
      curr: currArr,
      next: nextArr,
      keys: ['id']
    });

  it(' output shoud have "toAdd" property', () =>  {
    expect(output).to.have.property('toAdd').that.is.an('array');
  });
  it(' output shoud have "toPatch" property', () =>  {
    expect(output).to.have.property('toPatch').that.is.an('array');
  });
  it(' output shoud have "toDelete" property', () =>  {
    expect(output).to.have.property('toDelete').that.is.an('array');
  });
  it(' output.toAdd check', () =>  {
    expect(output.toAdd).to.be.an('array').that.have.lengthOf(2);
  });
  it(' output.toPatch check', () =>  {
    expect(output.toPatch).to.be.an('array').that.have.lengthOf(1);
  });
  it(' output.toDelete check', () =>  {
    expect(output.toDelete).to.be.an('array').that.have.lengthOf(1);
  });
});

