/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
   let open = ['(','{','['];
   let closed = [')','}',']'];
   let stack = []
    for(let i of s){
        if(open.includes(i)){
         stack.push(open.indexOf(i))
        }else if(closed.indexOf(i) !== stack.pop()){
               return false;
        }
      }
      console.log(stack)
      if(stack.length === 0) return true
      return false 
    };

  console.log(isValid("[{()}]"))