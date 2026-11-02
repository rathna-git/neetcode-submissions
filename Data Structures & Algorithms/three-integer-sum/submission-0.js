class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        
        nums.sort((a, b) => a - b);
        
        const output = [];

        for(let i = 0; i < nums.length - 2; i ++){
            
            // checks if number is positive. the sum of three positive numbers cannot be zero.
            if(nums[i] > 0) break;

            // checks for possible duplicate values
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            const target = -nums[i];
            let left = i + 1;
            let right = nums.length - 1;

            while(left < right){
                const sum = nums[left] + nums[right];

                if(sum === target){
                    output.push([nums[i], nums[left], nums[right]]);

                    left++;
                    right--;

                    //skips the duplicate values on the left side
                    while(left < right && nums[left] === nums[left - 1]){
                        left++;
                    }

                    //skips the duplicate values on the right side
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
