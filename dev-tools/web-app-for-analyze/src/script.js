function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

setInterval(e => sleep(100));