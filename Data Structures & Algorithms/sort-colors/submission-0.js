class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let countZero = 0;
        let countOne = 0;
        let countTwo = 0;
        let writeIndex = 0;

        for(let i = 0; i < nums.length; i++){
            if (nums[i] === 0){
                countZero++;
            } else if(nums[i] === 1){
                countOne++;
            } else{
                countTwo++;
            }
        }

        while(countZero > 0){
            nums[writeIndex] = 0;
            writeIndex++;
            countZero--;
        }
        while(countOne > 0){
            nums[writeIndex] = 1;
            writeIndex++;
            countOne--;
        }
        while(countTwo > 0){
            nums[writeIndex] = 2;
            writeIndex++;
            countTwo--;
        }
    }

}
