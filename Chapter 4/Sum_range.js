function range(start, end, step= end > start ? 1:-1){
    let result = [];
    if (step>0){
        for (let i = start; i <= end; i=i+step) {
            result.push(i)
        }
    }else{
        for (let i = start; i >= end; i=i+step) {
            result.push(i)
        }
    } 
    return result;
}
function sum(result){
    let sum=0;;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}