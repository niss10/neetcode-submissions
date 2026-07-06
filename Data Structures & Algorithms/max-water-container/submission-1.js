class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;
        while(left < right){
            let leftBar = heights[left];
            let rightBar = heights[right];
            let smallerBar = leftBar <= rightBar? leftBar:rightBar;
            let distance = Math.abs(left - right);
            let area = smallerBar * distance;
            maxArea = Math.max(maxArea, area);
            if (leftBar <= rightBar) left++;
            else right--;

        }
        return maxArea;
    }
}
