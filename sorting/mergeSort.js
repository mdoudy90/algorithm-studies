var mergeSort = function(numbers) {
  if (numbers.length <= 1) return numbers;

  let midpoint = Math.floor(numbers.length / 2);
  let left = numbers.slice(0, midpoint);
  let right = numbers.slice(midpoint);

  function merge(arr1, arr2) {
    let i = 0, j = 0, sortedArr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        sortedArr.push(arr1[i++]);
      } else {
        sortedArr.push(arr2[j++]);
      }
    }
    return [...sortedArr, ...arr1.slice(i), ...arr2.slice(j)];
  }

  return merge(mergeSort(left), mergeSort(right));
};

// console.log(mergeSort([4,7,4,3,9,1,2]));