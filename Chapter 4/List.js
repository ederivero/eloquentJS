function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i > -1; i--) {
        list = { value: array[i], rest: list };
    };
    return list;
}
function listToArray(object) {
    let array = [];
    for (let node = object; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(newValue, list) {
    return { value: newValue, rest: list }

}
function nth(list,number){
    let array = listToArray(list);
    return number>array.length?undefined:array[number]
}
console.log(arrayToList([1, 2, 3]))
console.log(listToArray(arrayToList([1, 2, 3])))
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([1, 2, 3]),4));