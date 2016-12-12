function wordCounts(inputString) {
  //return { hi: 1, vinit: 1, and: 1, bharat: 1 }
  return inputString.reduce((output, input) => {
    input = input.toLowerCase()
    output[input] = (output[input] || 0) + 1
    return output
  },{})
}

module.exports = wordCounts;
