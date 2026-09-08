class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const ans = new Set(nums);
        return ans.size !== nums.length;
    }
}
