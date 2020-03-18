// Imagine you have 2 arrays which have already been sorted. 
// Write an algorithm to merge the 2 arrays into a single array, 
// which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// O(n^2) polynomial
function mergeArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
  
    arr1.sort((a, b) => a - b);
    return arr1;
  }
  
  console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
