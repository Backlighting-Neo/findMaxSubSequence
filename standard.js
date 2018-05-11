module.exports = function(array) {
  let maxSum, maxHere;

  maxSum = maxHere = array[0];

  for(let i = 1; i < array.length; i++) {
    if(maxHere <= 0) maxHere = array[i];
    else maxHere += array[i];
    if(maxHere > maxSum) maxSum = maxHere;
  }

  return maxSum;
}