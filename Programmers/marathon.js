function solution(participant, completion) {
  var answer = '';
  let c = {};
  
  for(let i = 0; i<completion.length; i++){
      c[completion[i]] = c[completion[i]] ? c[completion[i]]+1 : 1;
  }
 
  for(let i = 0; i<participant.length;i++){
      if(!(participant[i] in c)){
          answer += participant[i];
         
      } else {
          c[participant[i]] = c[participant[i]] -1;
          if( c[participant[i]] == 0){
              delete c[participant[i]] 
          }
      }  
  }
  
  return answer;
}

function solution2(participant, completion) {
  let c = {};
  
  for(let i = 0; i<completion.length; i++){
      c[completion[i]] = c[completion[i]] ? c[completion[i]]+1 : 1;
  }
 
return participant.find(t => { //조건에 맞는 제일 첫번째 것만 리턴
   if(c[t])
       c[t] = c[t]-1;
   else
       return true;
})
}