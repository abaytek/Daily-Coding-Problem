var productExceptSelf = function(nums) {
    let n = nums.length
  let result = new Array(n)
  let prefix = new Array(n)
  let suffix = new Array(n)
    prefix[0] = 1
    suffix[n-1] = 1
    for (i = 1; i < n; i++)
        prefix[i] = nums[i - 1] * prefix[i - 1];

    for (j = n - 2; j >= 0; j--)
        suffix[j] = nums[j + 1] * suffix[j + 1];

    for(let i = 0; i<prefix.length; i++){
        result[i] = prefix[i]*suffix[i]
    }
  return result
};











// [1,1,2,6,24
// [120,60,20,5,1]



