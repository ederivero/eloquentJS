function every(array, test) {
    // Method 1
    // for (let index = 0; index < array.length; index++) {
    //     return !test(array[index]) && false;
    // }
    // Method 2
    for (const key in array) {
        return !test(array[key]) && false
    }
    return true;
}