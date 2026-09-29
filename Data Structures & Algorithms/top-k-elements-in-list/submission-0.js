class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const cache = {};
        for(let i = 0; i < nums.length; i++){
            if(cache[nums[i]]){
                cache[nums[i]]++;
            } else {
                cache[nums[i]] = 1
            }
        }
        const buckets = Array.from(
            {length: nums.length + 1},
            () => []
        );

        for(const[number,frequency] of Object.entries(cache)){
            buckets[frequency].push(Number(number))
        }

        const result = [];

        for (let frequency = buckets.length - 1; frequency >= 1; frequency--) {
            for (const number of buckets[frequency]) {
                result.push(number);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
