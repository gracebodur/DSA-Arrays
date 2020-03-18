// Given an array of numbers, write an algorithm to 
// find out the products of every other number 
// except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

//0(n^2) polynomial
function products(arr) {
    let result = 1;
    let total = [];
    for (let i = 0; i < arr.length; i++) {
      result = result * arr[i]
    }
    for (let j = 0; j < arr.length; j++) {
      total.push(result / arr[j])
    }
    return total;
  }
  
  console.log(products([1, 3, 9, 4]));
 