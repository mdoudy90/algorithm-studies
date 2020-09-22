const bubbleSort = function (numbers, right = numbers.length) {
  let left = 0;
  let sorted = true;

  while (left + 1 < right) {
    if (numbers[left] > numbers[left + 1]) {
      [numbers[left], numbers[left + 1]] = [numbers[left + 1], numbers[left]];
      sorted = false;
    }
    left += 1;
  }

  if (!sorted) {
    left = 0;
    bubbleSort(numbers, right - 1);
  }

  return numbers;
};

// console.log(bubbleSort([2, 1, 3, 0, 1]));

// O(n^2)
