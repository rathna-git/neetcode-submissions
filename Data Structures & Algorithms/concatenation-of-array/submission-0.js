class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        const res = new Array(len * 2);

        for (let i = 0; i < len; i++){
            res[i] = nums[i];
            res[len + i] = nums[i];
        }

        return res;
    }
}
