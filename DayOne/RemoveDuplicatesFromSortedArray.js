// Problem: Remove Duplicates from Sorted Array
// PW2.01.016

// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

// Input Validation: Check if the input array nums is valid, i.e., not null or empty.

// function removeDuplicates(nums) {
//   if (!nums || nums.length === 0) {
//     return 0;
//   }

//   let index = 0;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[index]) {
//       nums[index] = nums[i];
//       index++;
//     }
//   }

//   return index + 1;
// }

// // Example usage:
// const nums1 = [0, 1, 1, 2];
// const count1 = removeDuplicates(nums1);
// console.log("Number of unique elements in nums1:", count1);
// console.log("Modified nums1:", nums1.slice(0, count1));
// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
// console.log(removeDuplicates(nums2)); // Output: 5,

var removeDuplicates = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[1] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

// var removeDuplicates = function (nums) {
//   if (!nums || nums.length === 0) return 0; // Check if nums is empty or invalid

//   let index = 1; // Initialize index to track the position of the next unique element

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       // Check if the current element is different from the next element
//       nums[index] = nums[i + 1]; // Update nums with the next unique element
//       index++; // Increment index to move to the next position for the next unique element
//     }
//   }

//   return index; // Return the index which represents the number of unique elements
// };

const nums1 = [0, 1, 1, 2, 2, 3];
const count1 = removeDuplicates(nums1);
console.log("Number of unique elements in nums1:", count1);
console.log("Modified nums1:", nums1.slice(0, count1));
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2)); // Output: 5,
