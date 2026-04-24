class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let msg = "";
        if (strs.length === 0) return '';
        for (let str of strs){
            let len = str.length;
            msg += len + "#" + str; 
        }
        return msg;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return [];
        let i = 0;
        let result = [];
        while (i < str.length){
            let j = i;
            while (str[j] !== '#'){
                j++;
            }

            let len = parseInt(str.slice(i, j));
            result.push(str.slice(j+1, j+len+1));
            i = j + len + 1;
        }
        return result;
    }
}
