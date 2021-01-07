size = 10;
for (let i = 0; i < size; i++) {
    i % 2 == 0 ? text = " " : text = "#"
    for (let j = 0; j < size; j++) {
        text[text.length - 1] == "#" ? text += " " : text += "#"
    }
    console.log(text);
}