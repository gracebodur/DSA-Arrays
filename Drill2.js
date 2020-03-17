// Using the Array class you just created above, add an item to the array. Use the following function:

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

// What is the length, capacity and memory address of your array?
// MyArray { length: 1, _capacity: NaN, ptr: 0 }

// Add the following in the main function and then print the array:

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

// What is the length, capacity and memory address of your array? 
// Explain the result of your program after adding the new lines of code.

function main(){
    let newArray = new MyArray() // create a copy of the MyArray class

// push or add items to the array
newArray.push(3)
newArray.push(5)
newArray.push(15)
newArray.push(19)
newArray.push(45)
newArray.push(10)

newArray.pop()
newArray.pop()
newArray.pop()


if (newArray.length) {
    for (let i = 0; i = newArray.length; i++) {
      newArray.remove(0);
      console.log(newArray.length);
    }
  }

newArray.push('tauhida')
console.log(newArray)

}

main()