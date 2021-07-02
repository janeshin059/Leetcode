/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(!s || s.length == 0) return 0;
    let longest = 0;
    let l = 0;
    let seen = new Set();
    for(let r = 0; r<s.length; r++){
      while(seen.has(s[r])) {
        seen.delete(s[l++]);
      }
      seen.add(s[r]);
      longest = Math.max(longest, r-l +1);
    }
    return longest;
};