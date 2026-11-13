class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let left = 0;
        let longest = 0;

        for(let right = 0; right < s.length; right++){

            while(seen.has(s[right])){
                seen.delete(s[left]);
                left++;
            }

            seen.add(s[right]);
            const currentLength = right - left + 1;
            longest = Math.max(longest, currentLength);
        }

        return longest;

    }
}
