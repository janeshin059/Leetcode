var isLongPressedName = function(name, typed) {
  if(name == typed) return true;
  if(name[0] !== typed[0]) return false;
  let i = 1;
  for(let j = 1; j < typed.length;j++){
    if(typed[j] == name[i]){
      i++;
    }
    else if(typed[j] !== typed[j-1]){
      return false;
    }
  }
  return i == name.length; //valid to the end

};