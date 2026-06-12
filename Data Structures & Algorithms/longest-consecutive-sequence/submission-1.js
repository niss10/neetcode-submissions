class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums || nums.length === 0){
            return 0;
        }
        const uniqNums = [... new Set(nums)];
        const sortedNums = uniqNums.sort((a, b) => a - b);

        let seqCount = 1;
        let longSeq = 1;
        for(let i = 0; i < sortedNums.length; i++){
            let prev = sortedNums[i];
            seqCount = 1;
            for(let j = i+1; j<sortedNums.length; j++){
                let curr = sortedNums[j];
                if(++prev === curr){
                    seqCount++;
                    prev = curr;
                }
                else{
                    if(seqCount > longSeq){
                        longSeq = seqCount;
                    }
                    break;
                }
            }
            if(seqCount > longSeq){
                longSeq = seqCount;
            }
        }
        return longSeq;
    }
}
