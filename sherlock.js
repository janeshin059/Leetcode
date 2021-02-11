function isValid(s) {
  s = s.split('');
  let result = [];
  let resultArr = [];
  let remove = 0;
  s.forEach(function(x) {
    result[x] = (result[x] || 0) + 1;
  })
  console.log(result);
  for(let [key,value] of Object.entries(result)){
    resultArr.push(value);
  }
  console.log(resultArr);
  for(let i = 0; i<resultArr.length; i++){
    if(resultArr[i]-resultArr[i+1] >= 1 || resultArr[i]>resultArr[i+1] <= -1){
      if(resultArr[i]-resultArr[i+1] > 2 || resultArr[i]-resultArr[i+1] < -1){
        console.log('no');
        return 'NO';
      }
      else if (resultArr[i]-resultArr[i+1] > 0){
        remove += resultArr[i]-resultArr[i+1];
      }
      else {
        remove -= resultArr[i]-resultArr[i+1];

      }
    }
  }
  console.log(remove)

  if(remove >=2){
    console.log('no');
    return 'NO';
  }
  else {
    console.log('y');
    return 'YES';
  }
}

isValid('aabbcd');