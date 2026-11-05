class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let low = prices[0];
        

        for(let i = 0; i < prices.length - 1; i++){
            if(prices[i] > prices[i + 1] ){
                if(low > prices[i + 1]){
                    low = prices[i + 1];
                    console.log(low);
                }
                continue;
            } else {
                let currentProfit = prices[i + 1] - low;
                maxProfit = Math.max(maxProfit,currentProfit)
            }

        }

        return maxProfit;
    }
}
