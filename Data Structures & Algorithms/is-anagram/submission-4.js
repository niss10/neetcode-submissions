class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false;
        }
        const sMap = new Map();
        const tMap = new Map();
        for (let char of s){
            if(sMap.has(char)){
                sMap.set(char, (sMap.get(char) + 1));
            }
            else{
                sMap.set(char, 1);
            }
        }

        for (let char of t){
            if(tMap.get(char)){
                tMap.set(char, (tMap.get(char) + 1));
            }
            else{
                tMap.set(char, 1);
            }
        }

        for (let char of t){
            if(tMap.get(char) !== sMap.get(char)){
                return false;
            }
        }

        return true
    }
}
