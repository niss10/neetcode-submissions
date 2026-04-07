class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myNumMap = new Map();
        for(let i=0; i<nums.length; i++){
            if (myNumMap.get(nums[i])){
                return true
            }
            myNumMap.set(nums[i], [i])
        }
        return false
    }
}
