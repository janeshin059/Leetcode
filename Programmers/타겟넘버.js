function solution(numbers, target) {
  var answer = 0;
  function dfs(current, index){
      if(index == numbers.length){ //terminate when valid
           if(current == target){
              answer++;
              return;
          }
          return;
      }
      dfs(current + numbers[index], index+1)//find, 꼭 +1로 증가시켜주자. postfix쓰지말고
      dfs(current - numbers[index], index+1 )  
     
  }
  dfs(0, 0);//initialize
  return answer;
}