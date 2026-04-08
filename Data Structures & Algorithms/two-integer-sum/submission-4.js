class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // HashMap solution O(n) time complexity
        // O(n) Space Complexity
        // O(1) lookup because of HashMap
        const numsMap = new Map();
        for (let i = 0; i < nums.length; i++){
            if (numsMap.has(target - nums[i])){
                return [numsMap.get(target - nums[i]), i];
            }
            if (!numsMap.has(nums[i])){
                numsMap.set(nums[i], i);
            }
        }

        return false;

    }
}
