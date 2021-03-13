/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
   
  let currentColor = image[sr][sc]
  if(newColor == currentColor) return image;
 
  function dfs(image, row, col){
       if(row >= image.length || col >= image[0].length || row < 0 ||col < 0 || image[row][col] !== currentColor) return;
  image[row][col] = newColor;
      dfs(image, row-1, col);
      dfs(image, row+1, col);
      dfs(image, row, col-1);
      dfs(image,row,col+1);
      return image;
  }
  return dfs(image,sr,sc)
};
//bfs : too much memory(constructing O(n) queue)
var floodFill2 = function(image, sr, sc, newColor) {
  let currColor = image[sr][sc];
  if(currColor === newColor) return image;
  const queue = [[sr,sc]];
  while(queue.length > 0){
      const [row,col] = queue.shift();
      if(image[row][col] === currColor){
          image[row][col] = newColor
          if(row-1 >= 0) queue.push([row-1,col]);
          if(row+1 < image.length) queue.push([row+1, col]);
          if(col+1 < image[0].length) queue.push([row, col+1])
          if(col-1 >= 0) queue.push([row,col-1]) 

      }
  }
  return image;
};