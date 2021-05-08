function solution(progresses, speeds) {
  var answer = [];
 //따로 하지 않고, 함께 해결(기능들과 스피드가 짝이 되어 각각 올라감)
  while(speeds.length > 0){
      for(let i = 0; i<progresses.length; i++){
          if(progresses[i] < 100){
              progresses[i] += speeds[i];
          }
      }
      let deploy = 0;
      while(progresses[0] >= 100){
          //100이 넘으면 shift, 다음 기능이 100 이 되어도 shift
          progresses.shift();
          speeds.shift();
          deploy++;
      }
      if(deploy > 0){
          answer.push(deploy);
      }
  }
    
  return answer;
}