/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[k]) {
      // nums[i] = 0
      continue;
    }
    
    nums[++k] = nums[i];
  }

  console.log(nums, k);
  return k+1
};
console.log(removeDuplicates([
  1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7,
]));
