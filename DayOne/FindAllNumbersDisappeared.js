// Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

function findDisappearedNumbers(nums) {
  const result = [];

  // Mark the presence of numbers by negating the value at the corresponding index
  for (let num of nums) {
    const index = Math.abs(num) - 1; // Map number to index (0-based)
    nums[index] = -Math.abs(nums[index]); // Mark presence by negating value
  }

  // Iterate through the array to find missing numbers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      // If the value at index i is positive, it means i + 1 is missing
      result.push(i + 1);
    }
  }

  return result;
}

// Example usage:
const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums1)); // Output: [5, 6]

const nums2 = [1, 1];
console.log(findDisappearedNumbers(nums2)); // Output: [2]
