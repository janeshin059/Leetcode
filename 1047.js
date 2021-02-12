/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let res = [];
  
  for(let letter of S){
      if(res[res.length -1] != letter){
          res.push(letter)
      }else res.pop()
  }
  return res.join('');
 
};