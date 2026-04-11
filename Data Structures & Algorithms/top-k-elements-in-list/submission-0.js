class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Most intuitive solution that comes in my mind
        const freqMap = {};
        for (let num of nums){
            freqMap[num] = (freqMap[num] || 0) + 1;
        }
        // Sort and slice
        // Object.entries(freqMap) returns an array of [key, value] pairs
        return Object.entries(freqMap)
            .sort((a, b) => b[1] - a[1]) // Sort descending by frequency
            .slice(0, k)                 // Get top k entries
            .map(entry => Number(entry[0])); // Convert key back to a number
        
    }
}
