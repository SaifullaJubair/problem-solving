// Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

function findDuplicate(nums) {
  // Phase 1: Detect the intersection point of the two pointers
  let tortoise = nums[0]; // Slow pointer
  let hare = nums[0]; // Fast pointer

  do {
    tortoise = nums[tortoise]; // Move slow pointer by one step
    hare = nums[nums[hare]]; // Move fast pointer by two steps
  } while (tortoise !== hare);

  // Phase 2: Find the entrance to the cycle
  tortoise = nums[0]; // Reset slow pointer

  while (tortoise !== hare) {
    tortoise = nums[tortoise]; // Move slow pointer by one step
    hare = nums[hare]; // Move fast pointer by one step
  }

  return tortoise; // Return the duplicate number
}

// Example usage:
const nums1 = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums1)); // Output: 2

const nums2 = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums2)); // Output: 3

const nums3 = [3, 3, 3, 3, 3];
console.log(findDuplicate(nums3)); // Output: 3
