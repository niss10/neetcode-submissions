class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // Time Complexity = O(n);
    // Space Complexity = O(n);
    // this time complexity is with division operation
    productExceptSelf(nums) {
        let productOfNums = 1;
        let productofNumsWOZero = 1;
        let zeroCount = 0;

        for (let num of nums){
            if (num === 0){
                zeroCount++;
                if (zeroCount > 1){
                    productOfNums = 0;
                    productofNumsWOZero = 0;
                    break;
                }
                productOfNums = 0;
                continue;
            }
            productofNumsWOZero *= num; 
        }
        if (zeroCount === 0) productOfNums = productofNumsWOZero;
        let output = []
        for(let i = 0; i< nums.length;i++){
            if(nums[i] === 0) {
                output[i] =  productofNumsWOZero;
                continue;
            }
            output[i] = productOfNums / nums[i];
        }
        return output
    }
}
