class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const output = [];

        for(let i = 0; i < nums.length - 2; i++){

            if(nums[i] > 0) break;

            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            const target = -nums[i];
            

            while(left < right){
                const sum = nums[left] + nums[right];
                if(sum === target){
                    output.push([nums[i],nums[left],nums[right]]);

                    left++;
                    right--;

                    while(left < right && nums[left] === nums[left - 1]){
                        left++;
                    }

                    while(left < right && nums[right] === nums[right + 1]){
                        right--;
                    }
                } else if(sum < target){
                    left++;
                } else {
                    right--;
                }
            }
        }

        return output;
    }
}
