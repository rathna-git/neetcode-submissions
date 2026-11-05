class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let lowestPrice = prices[0];
        

        for(let i = 0; i < prices.length - 1; i++){
            lowestPrice = Math.min(lowestPrice, prices[i])
            
            const currentProfit = prices[i + 1] - lowestPrice;
            maxProfit = Math.max(maxProfit,currentProfit);

        }

        return maxProfit;
    }
}
