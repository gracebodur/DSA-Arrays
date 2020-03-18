// Write an algorithm which searches through a 2D array, 
// and whenever it finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

function array2D(arr) {
    const originalArr = JSON.parse(JSON.stringify(arr))
    let newArr = arr

    originalArr.map((row, rowI) => {
        row.map((item, arrI) => {
            if (item === 0) {
                newArr[rowI].forEach((num, i) => newArr[rowI][i] = 0)
                newArr.forEach(newRow => newRow[arrI] = 0)
            }
        })
    })
    console.log(newArr)
    return newArr
}

console.log(array2D(
    [
        [1,0,1,1,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,0,1,1,1],
        [1,1,1,1,1]
    ]
    )
)