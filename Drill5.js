function stringToURL(string) {
    const arr = string.split('')

    const newArr = arr.map((item, index) => {
        if(item === ' ') { // if item has an empty string 
            return arr[index] = '%20' // replace the items index with '%20'
        }
        return item
    })
    return newArr.join('')
}

console.log(stringToURL('tauhida parveen'))
console.log(stringToURL('www.thinkful.com /tauh ida parv een'))