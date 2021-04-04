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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {
    let low = 0;
    let high = s.length -1;
    while(low < high){
        if(s[low] !== s[high]){
            if(isPalinDrome(s,low+1, high)){
                return low;
            }
            else if(isPalinDrome(s,low, high-1)){
                return high;   
            }  
        }
        low++;
        high--;
    }
    return -1;
}

function isPalinDrome(s, low, high){
    while(low<high){
        if(s[low] !== s[high]) return false;
        low++;
        high--;    
    }
    return true;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}
