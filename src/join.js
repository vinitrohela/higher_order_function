function join(stringArray, delimiter){
  if(!delimiter){
    delimiter = ' '
  }
  return stringArray.reduce((output,input) => {
    return output = output + delimiter+ input
  })
  //return 'vinit,bharat'
}

module.exports = join;
