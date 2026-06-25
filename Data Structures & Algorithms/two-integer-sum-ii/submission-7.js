class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const targetcomplimentMap = new Map();
        for(let i = 1; i <= numbers.length; i++){
            let curr = numbers[i-1];
            let compliment = target - numbers[i-1];
            if(targetcomplimentMap.has(compliment)){
                let complimentIndex = targetcomplimentMap.get(compliment)
                return [complimentIndex, i]
            }
            
            targetcomplimentMap.set(curr, i);
            
        }
        return false;
    }
}
