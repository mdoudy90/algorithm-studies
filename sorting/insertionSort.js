const insertionSort = function (numbers) {
  for (let i = 1; i < numbers.length; i++) {
    let j = i;
    while (j && numbers[j - 1] > numbers[j]) {
      [numbers[j], numbers[j - 1]] = [numbers[j - 1], numbers[j]];
      j -= 1;
    }
  }

  return numbers;
};

// console.log(insertionSort([5, 2, 7, 0, -5, 75, 45, 88, 33, -4]));


//! using pointers

// var insertionSort = function(numbers) {

//   let left = 0;
//   let right = 1;

//   while (right < numbers.length) {
//     if (numbers[right] < numbers[left]) {
//       numbers.splice(left, 0, numbers.splice(right, 1)[0]);
//       right += 1;
//       left = 0;
//     } else
//     if (numbers[right] === numbers[left]) {
//       numbers.splice(left + 1, 0, numbers.splice(right, 1)[0]);
//       right += 1;
//       left = 0;
//     } else {
//       left += 1;
//     }
//   }

//   return numbers;
// };