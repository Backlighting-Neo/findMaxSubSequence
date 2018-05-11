const solution = require('./solution');
const standard = require('./standard');

const testcase = [
  [-1, 2, 3, 8, -10, 2],
  [-1, 2, 3, 8, -10, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 4, 5, 6],
  [-1, -2]
];

describe('find Max sub sequence', () => {
  testcase.forEach((item) => {
    const standardResult = standard(item);
    test(`[${item.join(', ')}] = ${standardResult}`, () => {
      expect(solution(item)).toEqual(standardResult);
    })
  })
})