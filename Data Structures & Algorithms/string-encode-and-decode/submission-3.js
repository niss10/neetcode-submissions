class Solution {
    // This is solution is most naive approach and intuitive, it may not be best
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Time Complexity = O(n^2);
        // Space Complexity = O(n*k);
        let msg = "";
        let key = 5;
        let delimaterAscii = 32;
         for (let str of strs){
            for (let ch of str){
                let ascii = ch.charCodeAt(0);
                ascii = ascii + key;
                let newCh = String.fromCharCode(ascii);
                msg += newCh;
            }
            msg += String.fromCharCode(delimaterAscii);
        }
        return msg;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // Time complexity = O(n*k)
        // Space complexity = O(n*k)
        let strs = [];
        let key = 5;
        let delimaterAscii = 32;
        let tempStr = '';
        for (let ch of str){
            let ascii = ch.charCodeAt(0);
            if (ascii == delimaterAscii){
                strs.push(tempStr);
                tempStr = '';
                continue;
            }
            let originalChAscii = ascii - key;
            let originalCh = String.fromCharCode(originalChAscii);
            tempStr += originalCh;
        }

        return strs;
    }
}
