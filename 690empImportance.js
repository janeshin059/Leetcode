var GetImportance = function(employees, id) {
  let map = new Map(); 
  for(employee of employees){
    map.set(employee.id, {importance: employee.importance, subs: employee.subordinates}) 
  }
  let total = 0;
  let queue = [];
  queue.push(id)
  while(queue.length>0){
    let current = map.get(queue.shift());
    total += current.importance;
    queue.push(...current.subs)
  }
  return total;
};
