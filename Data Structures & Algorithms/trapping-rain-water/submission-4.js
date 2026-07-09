class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let trappedWater = 0;
        let leftMax = height[left];
        let rightMax = height[right];
        while(left < right){
            if(height[left] <= height[right]){
                leftMax = Math.max(leftMax, height[left]);
                trappedWater += leftMax - height[left];
                left++;
            }
            else{
                rightMax = Math.max(rightMax, height[right]);
                trappedWater += rightMax - height[right];
                right--; 
            }
        }
        return trappedWater;
    }

}
