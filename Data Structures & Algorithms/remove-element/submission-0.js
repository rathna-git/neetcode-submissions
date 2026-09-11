class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        let j = 0;
        while(i < nums.length){
            if(nums[i] !== val){
                nums[j] = nums[i]
                j ++
            } 
            i++
        }
        return j
    }
}
