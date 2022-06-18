/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let arr = [];
    for(let i in nums){
      if(nums[i] == target){
        arr.push(i)
      }
    }
        // console.log(nums.lastIndexOf(12) , );
        return [arr[0]==undefined ? -1 : arr[0] , arr[arr.length -1]==undefined ? -1 :arr[arr.length -1]]
};


console.log(searchRange([] , 12))