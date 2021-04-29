function solution(board, moves) {
  var answer = 0;
  let stack = [];
  for(let i = 0; i<moves.length; i++){
      for(let j = 0; j<board.length;j++){
          if(board[j][moves[i]-1] !== 0){
              if(stack.length == 0){
                  stack.push(board[j][moves[i]-1]);
              }
              else if(stack[stack.length-1] !== board[j][moves[i]-1]){
                  stack.push(board[j][moves[i]-1]);
                  
              }
              else if(stack[stack.length-1] == board[j][moves[i]-1]){
                  stack.pop(); 
                  answer+=2;
              }
              board[j][moves[i]-1] = 0;
              break; //요걸 안해줘서..일단 0으로 만들었으면 다음 moves로 바로 넘어가야지, 다른거 돌면 안됨
          }
      }
  }
  return answer;
}