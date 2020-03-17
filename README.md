# DSA Arrays

#### Arrays
- Arrays are an ordered sequence of data (plus potentially empty spaces).
- stored in contiguous memory that is in order.
- have the smallest footprint of any data structure.

```
const strings = 
['a', 'b', 'c', 'd']
  0    1    2    3
//4*4 = 16 bytes of storage

// access the array
strings[2] // time complexity 0(1)

//push - add an item at the end of the array
strings.push('e') //time complexity 0(1)
console.log(strings) // ['a', 'b', 'c', 'd', 'e']

//pop - remove an item at the end of the array
strings.pop() //time complexity 0(1)
console.log(strings) // ['a', 'b', 'c', 'd']

//unshift - add at the beginning of the array
strings.unshift('x') //time complexity 0(n) loop through every item and reassigned the indexes 

console.log(strings)
['x', 'a', 'b', 'c', 'd']
  0    1    2    3    4  // index number

//splice - add an item at the middle of an array
strings.splice(2, 0, 'foo') //time complexity 0(n) loop through every item and reassigned the indexes 

['x', 'a', 'foo', 'b', 'c', 'd']
  0    1    2      3    4    5    // index number

```

#### Memory address

#### Memory module

[Technical Interview Mind Map](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)