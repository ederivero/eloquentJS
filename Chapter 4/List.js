function arrayToList(array){
    let list;
    for (let i = array.length; i > -1; i--) {
        list = { value: array[i], rest: list};
    };
    return list;
}
console.log(arrayToList([1,2,3]));