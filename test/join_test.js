const expect = require('chai').expect
const join = require('../src/join')

describe('# join', () =>{
  it('returns the string with join delimiter', () => {
    const stringArray = ['vinit','bharat']
    const delimiter = ','
    expect(join(stringArray,delimiter)).to.deep.equal('vinit,bharat')
  })
  it('returns the string with join delimiter as a /', () => {
    const stringArray = ['vinit','bharat']
    const delimiter = '/'
    expect(join(stringArray,delimiter)).to.deep.equal('vinit/bharat')
  })
  it('returns the string with space if no delimiter is provided', () => {
    const stringArray = ['vinit','bharat']
    const delimiter = ''
    expect(join(stringArray)).to.deep.equal('vinit bharat')
  })
  it('returns the string with space if no delimiter is provided', () => {
    const stringArray = ['vinit','bharat', 'sagar', 'sachin']
    const delimiter = ''
    expect(join(stringArray)).to.deep.equal('vinit bharat sagar sachin')
  })
  it('returns the string with space if no delimiter is provided', () => {
    const stringArray = ['vinit','bharat', 'sagar', 'sachin']
    const delimiter = '?'
    expect(join(stringArray,delimiter)).to.deep.equal('vinit?bharat?sagar?sachin')
  })
})
