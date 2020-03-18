// You are given an array containing positive and negative integers. 
// Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

// 0(n)
function maxSum(array) {
    let max = array[0];
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
      sum += array[i];
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  }
  
  console.log(maxSum([4, 6, -3, 5, -2, 1]));