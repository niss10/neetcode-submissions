class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // O(n) solution
    longestConsecutive(nums) {

       // here we are creating set to remove duplicate from array and constant lookup
       const numSet = new Set(nums); // O(n) - Space Complexity
       let longest = 0;

       // We are iterating over set and process each element
       for (let num of numSet){ // O(n) - Time Complexity

            // Here we are checking if num we are processing is starting sequence and it is only true if n-1 is not present    
            if(!numSet.has(num - 1)){
                let length = 1;

                // Wer are checking if num + 1 sequence exist or not.
                while(numSet.has(num + length)){
                    length++;
                }

                // Getting longest    
                longest = Math.max(longest, length);
            }
       }
       return longest;
    }
}
