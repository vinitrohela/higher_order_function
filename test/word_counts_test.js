const expect = require('chai').expect
const wordCounts = require('../src/word_counts')

describe('# wordsCount', () => {
  it('returns an object with wordsCount', () => {
    const inputString = 'hi vinit and bharat'.split(' ')
    const output = {
      'hi':1,
      'vinit':1,
      'and':1,
      'bharat':1
    }
    expect(wordCounts(inputString)).to.deep.equal(output)
  })
  it('returns an object with wordsCount regardless of capitalization', () => {
    const inputString = 'hi vinit and bharat VINIT'.split(' ')
    const output = {
      'hi':1,
      'vinit':2,
      'and':1,
      'bharat':1
    }
    expect(wordCounts(inputString)).to.deep.equal(output)
  })
})
