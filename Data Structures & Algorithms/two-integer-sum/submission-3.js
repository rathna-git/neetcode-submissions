class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = new Map();

        for(let i = 0; i < nums.length; i++){
            let comp = target - nums[i];
            
            if(indices.has(comp)){
                return [indices.get(comp), i];
            }

            indices.set(nums[i],i);
        }
    }
}
