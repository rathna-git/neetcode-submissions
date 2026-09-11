class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let result = [];
        const cache = new Map();

        for(let i = 0; i < strs.length; i++){
            const sortedStr = strs[i].split("").sort().join("");

            if(cache.has(sortedStr)){
                cache.get(sortedStr).push(strs[i])
            } else {
                cache.set(sortedStr, [strs[i]])
            }
        }
        result = [...cache.values()]
        return result;
    }
}
