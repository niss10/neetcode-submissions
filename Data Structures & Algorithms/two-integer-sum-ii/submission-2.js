class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const targetComplementMap = new Map();
        for(let i = 1; i <= numbers.length; i++){
            let curr = numbers[i-1];
            let complement = target - numbers[i-1];
            if(targetComplementMap.has(complement)){
                let complementIndex = targetComplementMap.get(complement)
                return [complementIndex, i]
            }
            
            targetComplementMap.set(curr, i);
            
        }
        return false;
    }
}
