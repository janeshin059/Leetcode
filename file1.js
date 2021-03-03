var buddyStrings = function(A, B) {
    let swap = {}
    for(let i = 0; i<A.length; i++){
      if(A[i] !== B[i]){
        if(!swap.A){
          swap.A = A[i];
          swap.B = B[i];
        }else {
          if(swap.A !== B[i] || swap.B !== A[i]){
            return false;
          }
        }
      }
    }
    return true;
};