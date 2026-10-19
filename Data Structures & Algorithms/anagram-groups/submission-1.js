class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const cache = {}; 

        for(let i = 0; i < strs.length; i++){
            let sortedStr = strs[i].split("").sort().join("");
            if(cache[sortedStr]){
                cache[sortedStr].push(strs[i])
            } else {
                cache[sortedStr] = [strs[i]]
            }
        }
      
        return Object.values(cache);

    }
}
