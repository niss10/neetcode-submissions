class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 1;
        let right = numbers.length - 1;
        while (left <= right){
            let compliment = target - numbers[left-1];
            if(numbers[right] == compliment){
                return [left, right+1];
            }
            if(numbers[right] > compliment){
                right--;
                continue;
            }
            if(numbers[right] < compliment){
                left++;
            }
        }
        return false;
    }
}
