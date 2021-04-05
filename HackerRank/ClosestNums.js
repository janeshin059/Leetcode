'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    arr = arr.sort((a,b)=>a-b)
    
    let differences = new Map();
    for(let i = 0; i<arr.length; i++){
        if (arr[i+1] === undefined ||arr[i+1] === null) break;
        let diff = Math.abs(arr[i+1] - arr[i]);
        if(!differences.has(diff)){
            differences.set(diff, [arr[i],arr[i+1]]);
        }
        else {
            differences.set(diff, differences.get(diff).concat([arr[i], arr[i + 1]]));
        }
    }
    let min = Math.min(...differences.keys())
    return differences.get(min);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
