/* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

    Bonus: Can you do this in one pass?

*/

/**
Brute force solution
fix the first element and check its correspondent element that would sum up to the target, do the same for the rest of the elements
**/

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1, -1];
// }

// function twoSum(nums, target) {
//   let occurMap = new Map();
//   if (nums.length == 0) {
//     return [];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (occurMap.hasOwnProperty(target - nums[i])) {
//       //   return [occurMap[target - nums[i]], i];
//       return [occurMap[target - nums[i]], i];
//     } else {
//       occurMap[nums[i]] = i;
//       // occurMap.set(nums[i], 1)
//     }
//   }
//   return [-1];
// }
function twoSum(nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);
  if (nums.length == 0) {
    return [];
  }
  let right = nums.length - 1;
  let left = 0;
  let sum = sortedNums[left] + sortedNums[right];
  while (left < right) {
    if (sum == target) {
      return [left, right];
    } else if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return [-1];
}

let arr = [1, 2, 3]; // 1 2 3
let target = 4;
console.log(twoSum(arr, target));

/**
 Test cases might be 
 - [] array
 - Target Not found
 - Larger input array
**/
