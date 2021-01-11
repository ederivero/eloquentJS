function loop(start, end, update, funct) {
    while(end(start)){
        funct(start);
        start = update(start);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);