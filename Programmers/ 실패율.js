function solution(N, stages) {
    
  let res = [];
  let players = stages.length;
  for(let i = 0; i<N; i++){
     let notClear = stages.filter(p => p == i+1).length;
      let failureRate = 0;
      if(notClear == 0){
          failureRate = 0;
      }
      else {
          failureRate = notClear / players;
      }
      players = players - notClear;
      
      res.push({N: i+1, failureRate: failureRate});
      
  }
  res.sort((a,b)=>{
      if(a.failureRate > b.failureRate){
          return -1;
      }else if(a.failureRate < b.failureRate){
          return 1;
      }
      else {
          if(a.idx > b.idx){
              return -1;
          }else return 1;
      }
  })

  return res.map(n => n.N);
}