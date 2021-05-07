

function solution(numbers) {
    
  var answer = numbers.map(c=> c.toString()).
          sort((a,b) => (b+a) - (a+b)).join(''); //문자로 변환된 숫자를 연결해 비교 정렬
  
  return answer[0] == "0" ? "0" : answer; //numbers배열이 0으로만 구성되어 있을 경우 '0'만 출력
}