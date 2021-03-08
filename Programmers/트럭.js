function solution(bridge_length, weight, truck_weights) {
  let answer = 0; 
  let queue = [];
  let queue_weight = 0;
  
  while(truck_weights.length !== 0){
      answer +=1;
      if(queue.length === bridge_length){
          queue_weight -= queue.pop();
      }
      if(queue_weight + truck_weights[0] <= weight){
          let next_tk = truck_weights.shift(); 
          queue.unshift(next_tk);//앞쪽 트럭을 다리에 올림
          queue_weight += next_tk;//다리 위 트럭 무게
          
      }else {
          queue.unshift(0);//무게 여유 없으면 0 채워 넣음
          
      }
      if(truck_weights.length === 0){
          answer += bridge_length; //초를 다리 길이만큼 더해주고 종료
          break;
      }
  }
  return answer;
  
  
}