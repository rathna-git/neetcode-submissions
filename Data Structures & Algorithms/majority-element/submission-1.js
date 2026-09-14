class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let maxNum = 0;
       
        let currCount = 0;

        for(let i = 0; i < nums.length; i++){
            if(currCount === 0){
                maxNum = nums[i];
            } 

            if(nums[i] === maxNum){
                currCount += 1;
            } else {
                currCount -= 1;
            }
        }

        return maxNum;
    }
}