function solution(n, k, cmd) {
   let res = [];
   let stack = []; //erased rows
   for(let i = 0; i<n;i++){
       res.push('O'); //initialize
   }
   for(let i = 0; i<cmd.length;i++){
       if(cmd[i].length >1){
           if(cmd[i][0] == "U"){
               let Xnum = res.slice(0, k).filter(a => a == 'X').length;
              k -= (parseInt(cmd[i][2]) + Xnum);
           }else if(cmd[i][0] == "D"){
               let Xnum = res.slice(k+1).filter(a => a == 'X').length;
              k += (parseInt(cmd[i][2]) + Xnum);
           }
       }else{
           if(cmd[i] == "C"){
               stack.push(k);
               res[k] = 'X';
               if(k !== n-1){
                   k++;  
               }else k--;
           }else if(cmd[i] == "Z"){
               let deleted = stack.pop();
               res[deleted] = "O";
               if(deleted < k) k++;
           }
       }
       console.log(cmd[i],res,k);
   }
   return res.join('');
}

console.log(solution(5,0, ["C","Z"]));