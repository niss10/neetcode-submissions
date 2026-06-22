class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
         console.log("hello")
        const targetComplementMap = new Map();
        console.log("after map")
        for(let i = 1; i <= numbers.length; i++){
            let curr = numbers[i-1];
            let complement = target - numbers[i-1];
            console.log('curr = ', curr);
            console.log('complement', complement);
            if(targetComplementMap.has(complement)){
                let complementIndex = targetComplementMap.get(complement)
                return [complementIndex, i]
            }
            
            targetComplementMap.set(curr, i);
            
        }
        console.log('targetComplementMap', targetComplementMap)
        return false;
    }
}
