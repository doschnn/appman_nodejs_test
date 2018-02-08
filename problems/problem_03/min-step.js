const minStep = input => {
  // put your code here !!
  if(input < 1) {
    return 0
  }
  else if(input === 1) {
    return 0;
  }
  else if(input%2===0) { //even
      return 1+minStep(input/2)
  }
  else if(input%2!==0) { //odd
    let a = 1+minStep(input-1)
    let b = 1+minStep(input+1)
    return a<b? a : b;
  }
  return 0;
};
module.exports = { minStep };
