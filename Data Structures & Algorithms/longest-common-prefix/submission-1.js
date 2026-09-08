class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length === 0) return '';
        let res = '';

        for(let i = 0; i < strs[0].length; i++){
            for(let s of strs){
                if(i === s.length || s[i] !== strs[0][i]){
                    return res;
                }
            }
            res += strs[0][i];
        }
        return res;
    }
}
