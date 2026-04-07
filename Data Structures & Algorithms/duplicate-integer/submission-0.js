class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i=0; i<nums.length; i++){
            let target = nums[i];
            console.log(target);
            for (let j=i+1; j<nums.length; j++){
                console.log(nums[j]);
                if(target == nums[j]){
                    return true;
                }
            }
        }
        return false
    }
}
