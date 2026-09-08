class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const cache = {};

        for(let char of s){
            cache[char] = (cache[char] || 0) + 1;
        }

        for(let char of t){
            if(!cache[char]) return false;

            if(cache[char] > 1){
                cache[char] --;
            } else {
                delete cache[char];
            }
        }

        return Object.entries(cache).length === 0;
    }
}
