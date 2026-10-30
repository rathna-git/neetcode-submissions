class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        const mySet = new Set(nums);
        let longestLength = 0;

        for(const num of mySet){
            if(!mySet.has(num - 1)){
                let currentNum = num;
                let currentLength = 1;

                while(mySet.has(currentNum + 1)){
                    currentNum = currentNum + 1;
                    currentLength++;
                }

                longestLength= Math.max(longestLength, currentLength);
            }
        }

        return longestLength;
    }
}
