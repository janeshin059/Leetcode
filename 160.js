var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null;
  
  let p1 = headA;
  let p2 = headB;
  
  while(p1 !== p2){
      p1 = p1.next;
      p2 = p2.next;
      if(p1 == p2){
          return p1;
      }
          
      if(p2 == null){
          p2 = headA;
      }
      if(p1 == null){
          p1 = headB;
      } 
  }
  return p1;
  
};
//Hash table
/*
var getIntersectionNode = function(headA, headB) {
    let l1 = headA;
    let l2 = headB;
    let hashMap = new Map();
    while(l1){
        hashMap.set(l1,true)
        l1 = l1.next;
    }
    while(l2) {
        if(hashMap.has(l2)){
            return l2;
        }
        l2 = l2.next;
    }
    return;
}; */