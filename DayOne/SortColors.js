// Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

function sortColors(nums) {
  let low = 0; // Pointer for elements less than 1 (red)
  let mid = 0; // Pointer for elements equal to 1 (white)
  let high = nums.length - 1; // Pointer for elements greater than 1 (blue)

  while (mid <= high) {
    if (nums[mid] === 0) {
      // If current element is 0, swap it with the element at low pointer
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // If current element is 1, move mid pointer forward
      mid++;
    } else {
      // If current element is 2, swap it with the element at high pointer
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Example usage:
const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // Output: [0, 1, 2]
