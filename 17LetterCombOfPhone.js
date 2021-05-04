/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if(digits == ""){ //edge case
      return [];
  }
 let res = []; //store the answer
 let letters = {
     2:'abc',
     3:'def',
     4:'ghi',
     5:'jkl',
     6:'mno',
     7:'pqrs',
     8:'tuv',
     9:'wxyz'
 };
  function traverse(index, str){
      
      if(index == digits.length){ //reach the end of the phone number(digit), have a valid letter combination
          res.push(str);
          return;
      } 
      for(c of letters[digits[index]]){//find
          traverse(index+1, str+c);
      }
  }

  traverse(0,'');//initialize dfs
  
  return res;
}

