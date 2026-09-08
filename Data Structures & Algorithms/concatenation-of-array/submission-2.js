class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        const len = nums.length;
        for(let i = 0; i < len * 2; i++){
            ans[i] = nums[i % len]
        }
        return ans
    }
}
