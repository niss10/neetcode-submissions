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
        // This version of for loop works faster because we don't use get call unnecessary when key doesn't exist.
        for (let i = 0; i < s.length; i++){
            if(sMap.has(s[i])){
                sMap.set(s[i], (sMap.get(s[i]) + 1));
            }
            else{
                sMap.set(s[i], 1);
            }
            if(tMap.has(t[i])){
                tMap.set(t[i], (tMap.get(t[i]) + 1));
            }
            else{
                tMap.set(t[i], 1);
            }
        }
        for (let char of t){
            if(tMap.get(char) !== sMap.get(char)){
                return false;
            }
        }

        return true;
    }
}
