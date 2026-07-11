class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // more efficiant solution, Time Complexity = O(n), Space Complexity = O(1)
    maxProfit(prices) {
        let minBuy = prices[0];
        let maxProfit = 0;
        for(let sell of prices){
            maxProfit = Math.max(maxProfit, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }
        return maxProfit;
    }
}
