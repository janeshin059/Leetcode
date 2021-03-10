function solution(priorities, location) {
  let target=location;
 let ans = 1;
  let first;
  while(priorities.length > 0){
      first = priorities.shift() //가장 앞에 있는 문서 추출
      if(priorities.some((value) => value > first)){
         //중요도 높은 문서가 존재 시 뒤로 넣음
         priorities.push(first);
         }else {//더 중요도 높은 문서 존재하지 않음.가장큰거
             if(target === 0){
                 break;
             }
             else ans++;
         }
      //중요도 제일 낮은 경우 제일 끝으로 인덱스를 옮김
      if(target == 0) target = priorities.length -1;
      else target --;
         }
  return ans;
}