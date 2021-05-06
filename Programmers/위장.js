function solution(clothes) {
  var answer = 1;
  let options = {};
  for(let i = 0; i<clothes.length; i++){
      options[clothes[i][1]] = options[clothes[i][1]] ? options[clothes[i][1]]+1 : 1;
  }
  
  for(let option in options){
      answer *= options[option]+1; //안입는경우, 1번째선택, 2번째선택,..
  }
  
   return answer-1; // 아무것도 안입는 경우 뺌
}