'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the superReducedString function below.
function superReducedString(s) {
    let stack = [];
    for(let i = 0; i<s.length; i++){
        let c = s[i];
        if(stack.length > 0 && stack[stack.length -1] == c){
           stack.pop();    
        }else{
            stack.push(c);
        }
    }
    if(stack.length == 0){
        return 'Empty String'
    }
    return stack.join('');
   
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
