// Problem: Remove Duplicates from Sorted Array
// Input Validation: Check if the input array nums is valid, i.e., not null or empty.

export function RemoveDuplicates(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

// Example usage:
const nums1 = [1, 1, 2];
console.log(RemoveDuplicates(nums1)); // Output: 2, nums = [1, 2, _]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
console.log(RemoveDuplicates(nums2)); // Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
