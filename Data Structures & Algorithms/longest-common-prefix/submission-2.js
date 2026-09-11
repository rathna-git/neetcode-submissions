class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let output = '';

        if(strs.length === 0){
            return output;
        }

        for (let j = 0; j < strs[0].length; j++){
            const currentChar = strs[0][j]
            for(let i = 1; i < strs.length; i++){
                if(strs[i][j] !== currentChar){
                    return output
                }
            }
            output += currentChar
        }

        return output;
    }
}
