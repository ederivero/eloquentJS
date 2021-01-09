function reverseArray(array) {
    let reverse = [];
    let maxIndex = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        reverse[length] = array[i];
        length--;
    }
    return reverse;
}
let array = [1, 2, 3]
function reverseArrayInPlace(array) {
    let maxIndex = array.length - 1;
    for (let i = 0; i < (array.length / 2); i++) {
        let oldItem = array[i];
        array[i] = array[maxIndex - i];
        array[maxIndex - i] = oldItem;
    }
    return array;
}

console.log(reverseArray(['a', 'b', 'c']))

console.log(reverseArrayInPlace([1, 2, 3, 4]))