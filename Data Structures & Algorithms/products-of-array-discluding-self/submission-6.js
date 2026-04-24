class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // In this approach we will solve this problem y using prefix sum/product and suffix sum/product
    // Prefix product is product of all elements before present element
    // Sufix product is product of all elements after preset element
    // Time complexity = O(n)
    // Space complexity = O(n)
    productExceptSelf(nums) {
      let output = [];
      let prefix = 1;
      for(let i = 0;i<nums.length;i++){
        output[i] = prefix;
        prefix *= nums[i];
      }

      let suffix = 1;
      for (let i = nums.length-1; i>=0; i--){
        output[i] *= suffix;
        suffix *= nums[i];
      }

      return output;
    }
}
