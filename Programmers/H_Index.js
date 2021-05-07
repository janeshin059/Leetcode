function solution(citations) {
  citations.sort((a,b)=>b-a);
 
  let i = 0;
  while(i+1 <= citations[i]){
      i++;
  }
  return i;
}

function solution2(citations) {
  let ans = 0;
  citations.sort((a,b)=>b-a);
 
  for(let i = 0; i<citations.length;i++){
    if(i<citations[i]){
      ans++;
    }
    else break;
  }
  return ans;
}