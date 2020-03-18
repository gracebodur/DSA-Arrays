// Given 2 strings, str1 and str2, 
// write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

function stringRotation(str1, str2) {
    const arr1 = str1.split('')
    const arr2 = str2.split('')

    if(arr1.length !== arr2.length) {
        return false
    }

    const letter = arr2[0]
    const arr2Index = 0
    let letterIndex = []
    let arr1End = 0
    let arr2End = 0
   
    for(let i=0; i<arr1.length; i++) {
        if (arr1[i] === letter) {
            letterIndex.push(i)
        }
    }
}

console.log(stringRotation('amazon', 'azonam'))