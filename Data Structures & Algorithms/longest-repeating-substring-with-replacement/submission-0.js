class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let result = 0;
        const aCode = 'A'.charCodeAt(0);
        const frequency = new Array(26).fill(0);

        for(let right = 0; right < s.length; right++){
            const rIndex = s.charCodeAt(right) - aCode;
            frequency[rIndex]++;

            let highestFrequency = Math.max(...frequency);

            while(right - left + 1 - highestFrequency > k){
                const lIndex = s.charCodeAt(left) - aCode;
                frequency[lIndex]--;
                left++;

                highestFrequency = Math.max(...frequency);
            }

            const windowLength = right - left + 1;
            result = Math.max(result, windowLength);
        }

        return result;
    }
}
