/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    for(let i = 0; i<s.length;i++){
      if(!sMap.has(s[i])){
        sMap.set(s[i],i);
      }
      if(!tMap.has(t[i])){
        tMap.set(t[i],i);
      }
      if(sMap.get(s[i]) !== tMap.get(t[i])){
        return false;
      }
    }
    return true;
    

};