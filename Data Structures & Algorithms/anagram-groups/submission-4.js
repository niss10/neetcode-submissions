class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Time complexity: O(n * m)
        // Space complexity: O(n)
        // Most optimal solution
        const strsMap = {};
        for (let s of strs){
            const countOfS = new Array(26).fill(0);
            for (let char of s){
                countOfS[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            if(!strsMap[countOfS]){
                strsMap[countOfS] = [];
            }
            strsMap[countOfS].push(s);
        }
        return Object.values(strsMap);
    }
}
