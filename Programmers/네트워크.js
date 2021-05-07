function solution(n, computers) {
  var answer = 0;
  //DFS
 
  for (let i = 0; i < computers.length; i++) { //갯수만큼 loop
      if (computers[i][i] != -1) { //방문한 Node인지 체크
          answer++; //현재 시작하는 Node가 Root Node가 됨
          dfs(computers, i, n);
      }
  }
  
  function dfs(computers, idx, n) {
      for (let j = 0; j < n; j++) { //다른 Node에 대하여 전부 탐색해야함
          if (computers[idx][j] == 1 && computers[idx][j] != -1) {
              computers[idx][j] = computers[j][idx] = -1; //탐색한 경우 -1로 설정
              dfs(computers, j, n);
          }
      }
  }
  
  return answer;
}

/**----------SOL 2------------- */
//방문한 노드들을 stack에 추가


function solution(n, computers) {
  var answer = 0;
  let visited = []; // 방문한 노드들은 stack에 추가
  for(let i = 0; i<n;i++){
    if(!visited[i]){
      answer++;
      dfs(i, computers, visited);
    }
  }

  return answer;
}

function dfs(start, computers,visited){
  visited[start] = 1;
  for(let i = 0; i<computers.length;i++){
    if(!visited[i] && computers[start][i]){
      //해당 위치에서 다음 네트워크로 갈 수 있는 경우
      dfs(i, computers, visited)// 다음 네트워크 탐색
    }
  }
}