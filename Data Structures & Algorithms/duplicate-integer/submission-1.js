class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myNumMap = new Map();
        for(let i=0; i<nums.length; i++){
            if (myNumMap.get(nums[i])){
                myNumMap.get(nums[i]).push(i)
                console.log(myNumMap.get(nums))
                return true
            }
            myNumMap.set(nums[i], [i])
        }
        return false
    }
}
