/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let total = [];
   for(let i = 0; i< numRows ;i++){
       total[i] = [];
       total[i][0] = 1;
       for(let j = 1; j<i;j++){
           total[i][j] = total[i-1][j-1] + total[i-1][j];
       } 
       total[i][i] = 1;
   }
   return total;
};
