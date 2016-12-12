const expect = require('chai').expect
const pairToObject = require('../src/pair_to_object')

describe('# PairToObject',() => {
  it('returns an object with property name',() => {
    var input = [
      ['firstProp', 'firstVal'],
      ['secondProp', 'secondVal']
    ];
    const output = {
      firstProp : 'firstVal',
      secondProp : 'secondVal'
    }
    expect(pairToObject(input)).to.deep.equal(output)
  })
  it('returns an object with property name',() => {
    var input = [
      ['firstProp', 'firstVal']
    ];
    const output = {
      firstProp : 'firstVal'
    }
    expect(pairToObject(input)).to.deep.equal(output)
  })
})
