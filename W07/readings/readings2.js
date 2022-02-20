let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// My result is: [1, 2, 3, 4, 5, 6]

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// My result is : 3, 2, 1