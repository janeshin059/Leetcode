let numbers = [1,2,3,4];

arr.reduce(callback(accumulator, currentValue, index), initialValue)
//ex1

result = numbers.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc+cur;
}, 0); // 10

result = numbers.reduce((acc,cur,i) => {
  console.log(acc,cur, i);
  return acc+cur;
})//10

result = numbers.reduce((acc, cur) => {
  if(cur %2 == 1) acc.push(cur);
  return acc;
},[]) //[1,3]