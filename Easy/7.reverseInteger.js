/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let rem , sum =0,num =x;

    if(num < 0){
       num = Math.abs(num)
    }

    while(num > 0){
        rem =  num %10;
        num =  parseInt(num /  10);
        sum = sum * 10 + rem;
    }
    
    if (sum > 0x7FFFFFFF) {
        return 0;
    }
       return (x < 0)  ?  sum * -1 : sum

}

console.log(reverse(1534236469))