//Finding all the Properties of an Object 
// for (const key in superman) {
//     console.log(key + ": " + superman[key]);
// }

//The keyword this refers to the object that it is within. It can be used 
//inside methods to gain access to the object’s properties.
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

//Naming collisions occur when the same variable or function name is used for different purposes by code sharing the same scope.
const myMaths = {

    square(x) {
        return x * x;
    },
    mean(array, callback) {
        if (callback) {
            array.map(callback);
        }
        const total = array.reduce((a, b) => a + b);
        return total / array.length;
    }
};

console.log(myMaths.square(3));

//Quiz Ninja Project
// Set the questions
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz) {
    // initialize score
    let score = 0;

    // main game loop
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        // check if answer is correct
        if (response === answer) {
            alert('Correct!');
            // increase score by 1
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        // At the end of the game, report the player's score
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

start(quiz);