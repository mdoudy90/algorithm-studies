const quicksort = function (arr) {
  if (arr.length <= 1) return arr;

  let sorted = [], left = [], right = [], pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }

  left = quicksort(left);
  right = quicksort(right);

  sorted = [...left, pivot, ...right];

  return sorted;
};

// console.log(quicksort([3, 2, 5, 7, 6, 0, 9, 12]));