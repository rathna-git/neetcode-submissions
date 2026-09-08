class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        const n = nums.length * 2;
        let i = 0;

        while(i < n){      
            ans[i] = nums[i % nums.length];
            i++;
        }
        return ans;
    }
}
