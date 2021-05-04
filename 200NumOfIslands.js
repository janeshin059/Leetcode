/**
 * @param {character[][]} grid
 * @return {number}
 */
//similar as 733
 var numIslands = function(grid) {
   
 let res = 0;
 for(let i = 0; i<grid.length;i++){
     for(let j = 0; j<grid[i].length;j++){
         if(grid[i][j] == '1'){
             res += islandsCount(grid, i, j);
             //finding all the sibling number 1
         }
     }
 }
  return res;
  
};

function islandsCount(grid, row, col){
  //terminate when we are run out of bounds
  if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == '0') {
      return 0;
  }
  grid[row][col] = '0'; //make sure to don't check this spot again
  
  //all the possible paths
  islandsCount(grid, row-1, col);
  islandsCount(grid, row, col-1);
  islandsCount(grid, row+1, col);
  islandsCount(grid, row, col+1);
  return 1;
}