'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let res = 0; 
    for(let i = 0; i<arr.length;i++){
      if(arr[i] !== i+1){
          let idx = arr.indexOf(i+1,i); //배열의 맞는 값 == 그 배열의 인덱스 로 생각하자.
          //indexOf(i+1, i) 는 i+1 의 인덱스에 대해 i 부터 체킹한다는 것을 의미(안넣으면 시간초과남)
          arr[idx] = arr[i];
          arr[i] = i+1;
          res++;
      }
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
