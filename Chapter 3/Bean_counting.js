function countBs(text, letter="B") {
    countLetter = 0;
    for (const key in text) {
        text[key] === letter && countLetter++
    }
    return countLetter;
}
function countChar(text, letter){
    return countBs(text, letter);
}