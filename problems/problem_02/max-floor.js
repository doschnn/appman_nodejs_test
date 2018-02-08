const maxFloor = input => {
  // put your code here !!
  let floor = 0;
  let brick = 0;
  while (brick+floor+1 <= input) {
    floor++;
    brick += floor;
  }
  return floor;
};

module.exports = { maxFloor };
