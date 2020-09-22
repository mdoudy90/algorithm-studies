const bubbleSort = function (numbers) {
  let isSorted = false;
  let rightBound = 0;

  while (!isSorted) {
    let sortCount = 0;
    for (let i = 0; i < numbers.length - rightBound; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        sortCount += 1;
      }
    }
    isSorted = !sortCount;
    rightBound += 1;
  }
  return numbers;
};

console.log(bubbleSort([9, 15, 1, 6, 3, 7, 7, 0, -5, 11, 55, -4, 13, 18]));