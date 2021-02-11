// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the makeAnagram function below.
function makeAnagram(a, b) {

  let match = 0;
  a = a.split('');
  b = b.split('');

  lenA = a.length;
  lenB = b.length;


  for(let i = 0; i < lenA; i++){
      for(let j = 0; j < lenB; j++){
          if(a[i] == b[j]){
              b.splice(j,1);
              match++;
              break;
          }
      }
  }

  //return a.length + b.length - match*2;
  console.log(lenA + lenB- (match*2));
  
}

 makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke');
//makeAnagram('cccde','abccccc');

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const a = 'fcrxzwscanmligyxyvym';

//     const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

//     const res = makeAnagram(a, b);

//     ws.write(res + '\n');

//     ws.end();
// }
