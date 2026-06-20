class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // Solving this with two pointers
    // O(n) - Time Complexity
    // O(1) - Space Complexity
    isPalindrome(s) {
          let left = 0;
          let right = s.length - 1;
          while(left <= right){
            if(!(/^[a-zA-Z0-9]$/.test(s[left]))){
                left++
                continue;
            }
            if(!(/^[a-zA-Z0-9]$/.test(s[right]))){
                right--
                continue;
            }
            if(s[left].toLowerCase() == s[right].toLowerCase()){
                left++;
                right--;
            }
            else{
                return false
            }
        }
        return true
    }
}
