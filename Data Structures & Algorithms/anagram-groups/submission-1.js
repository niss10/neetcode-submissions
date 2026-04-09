class Solution {

    isAnagram(s, t){
        if (s.length != t.length){
            return false;
        }

        const sMap = new Map();
        const tMap = new Map();
        for(let i = 0; i < s.length; i++){
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }

        for (let char of s){
            if (sMap.get(char) != tMap.get(char)){
                return false;
            }
        }

        return true;

    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Brute approach for finding solution 
        const anagramList = [];
        const processedStr = new Set();
        for(let i=0; i < strs.length; i++){
            if(processedStr.has(strs[i])){
                continue;
            }
            const subAnagramList = [strs[i]];
            for(let j=i+1; j < strs.length; j++){
                if(this.isAnagram(strs[i], strs[j])){
                    subAnagramList.push(strs[j]);
                    processedStr.add(strs[j]);
                }
            }
            anagramList.push(subAnagramList);
        }

        return anagramList;
    }
}
