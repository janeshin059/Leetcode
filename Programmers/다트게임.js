function solution(dartResult) {
  var answer = 0;
  let stack = [];
  let cleaned = [];
  dartResult.split('');
  for(let i = 0; i<dartResult.length; i++){
      if(dartResult[i] == '1' && dartResult[i+1] == '0'){
          cleaned.push(10);
          i++;
      }else {
          cleaned.push(dartResult[i]);
      }
  }
 
  dartResult = cleaned;
 
  for(let i = 0; i<dartResult.length;i++){
    switch(dartResult[i]){
      case 'S':
        stack.push(parseInt(dartResult[i-1]));
        break;
      case 'D':
        stack.push(Math.pow(dartResult[i-1],2));
        break;
      case 'T':
        stack.push(Math.pow(dartResult[i-1],3));
        break;
      case '*':
        stack[stack.length-1] *= 2;
        stack.length >=2 ?  stack[stack.length-2] *= 2 : null;
        break;
      case '#':
        stack[stack.length-1] *= (-1);
        break;
      default:
    }

  }
  answer = stack.reduce((a,b) => a+b, 0);
  return answer;
}