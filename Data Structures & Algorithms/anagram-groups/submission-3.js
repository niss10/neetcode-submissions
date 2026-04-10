class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Time Complexity : O(n * m log m) solution
        // Space Complexity: O(n) extra space
        // We will sort each string and store as key in HashMap and original string as values and at last will return combined list of values
        const strsMap = {}
        for (let s of strs){
            const sortedS = s.split("").sort().join('');
            if (!strsMap[sortedS]){
                strsMap[sortedS] = [];
            }
            strsMap[sortedS].push(s);
        }
        return Object.values(strsMap);
    }

}
