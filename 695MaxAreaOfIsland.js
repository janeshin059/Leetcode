/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
  let maxSize = 0;
  
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
          if(grid[i][j] == 1){
              maxSize = Math.max(maxSize, getIslandSize(i,j,grid));
          }
      }
  }
  return maxSize;
};

function getIslandSize(row, col, grid){
  let size = 0;
 
  if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == 0){
      return 0;
  }
  
  grid[row][col] = 0;
  size = 1 +  getIslandSize(row-1, col, grid) + getIslandSize(row, col-1, grid) + getIslandSize(row+1, col, grid) +  getIslandSize(row, col+1, grid)

  return size;
}