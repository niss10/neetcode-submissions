class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
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
