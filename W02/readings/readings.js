//Minimum function

const minimum = (value1, value2) => value1 < value2 ? value1 : value2;
console.log("Minimum function: " + minimum(-1,6));

//Revsersing an array

const reverseArray = (inputArray) => {
    let newArray = [];
    let arrayLength = inputArray.length - 1;
    
    for (let i = 0; i < inputArray.length; i++){
        newArray[arrayLength] = inputArray[i];
        arrayLength -= 1;
    }
    return newArray;
}   

console.log("Reverse Array: " + reverseArray([1,2,3]));

//Count Bs
const countBs = (inputString) => {
    let counting = 0;
    for (let i = 0; i < inputString.length; i++){
        if (inputString[i] == "B") {
            counting += 1;
        }
    }
    return counting;
}

console.log("Count Bs: " + countBs("CBCBC"));

//Count Chars 
const countChar = (inputString, char) => {
    let counting = 0;
    for (let i = 0; i < inputString.length; i++){
        if (inputString[i] == char){
            counting +=1;
        }
    }
    return counting;
}

console.log("Count Char: " + countChar("AFKSLKK", "K"));

