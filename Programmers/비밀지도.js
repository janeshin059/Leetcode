function solution(n, arr1, arr2) {

  const answer = [];
  for(let i = 0; i<n;i++){
      const bin = (arr1[i] | arr2[i]).toString(2);
      console.log(bin)
      let line = '';
      for(let j = bin.length - n; j< bin.length;j++){
          if(bin[j] === '1'){
              line += '#';
          }
          else {
              line += ' ';
          }
      }
       answer.push(line);
  }
  
  return answer;
}