function pairToObject(inputArrays){
  return inputArrays.reduce((output,array) => {
    var property = array[0]
    var value = array[1]
    output[property] = value
    return output
  },{})
}

module.exports = pairToObject;
