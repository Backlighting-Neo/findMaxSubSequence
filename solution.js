module.exports = function(array) {

  // 传入值检查，必须为数字数组
  if (Object.prototype.toString.call(array) !== '[object Array]') throw new Error('Params must be a array');
  if(array.some(item => isNaN(item))) throw new Error('The item of array must be number');

  // 全正数则直接返回全部数字之和
  if(array.every(item => item > 0)) return array.reduce((a,b)=>a+b, 0);
  // 全负数则直接返回最大的一个数字
  if(array.every(item => item < 0)) return Math.max.apply(Math, array);

  // 将原数列中连续的正数或负数进行合并
  let processedArray = [array[0]];
  for(let i = 1; i < array.length; i++) {
    let lastProcessedNumber = processedArray[processedArray.length - 1];
    let currentNumber = array[i];

    if(lastProcessedNumber * currentNumber >= 0) {
      processedArray[processedArray.length - 1] = lastProcessedNumber + currentNumber
    }
    else {
      processedArray.push(currentNumber);
    }
  }

  // 去除所有为0的
  processedArray = processedArray.filter(item => item !== 0);

  // 标记处理后的数组头尾是否为负数
  const isNegativeNumberStart = processedArray[0] < 0;
  const isNegativeNumberEnd = processedArray[processedArray.length - 1] < 0;

  // 为负数则直接扔掉
  processedArray = processedArray.slice(isNegativeNumberStart ? 1 : 0, processedArray.length - (isNegativeNumberEnd ?  1 : 0));

  let maxSummary = 0;

  // 遍历处理后的数组中每个正数项，分别与其之后的两项进行加和，最终取最大的
  for(i = 0; i < processedArray.length; i += 2) {
    let currentSummary = processedArray[i];
    if(currentSummary > maxSummary) maxSummary = currentSummary;

    for (j = i + 1; j < processedArray.length; j += 2) {
      currentSummary = currentSummary + processedArray[j] + processedArray[j+1];
      if (currentSummary > maxSummary) maxSummary = currentSummary;
    }
  }

  return maxSummary;
}