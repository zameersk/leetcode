// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        // console.log(element)
         if(element == target || element > target){
           return index;
         }else if(index == nums.length-1){
           return nums.length
         }

        
    }
};

console.log(searchInsert([1,3,5,6] , 2))