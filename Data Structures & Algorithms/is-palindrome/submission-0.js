class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // First naive solution that I can think of reverse a string and check if it is matching with original string
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
