class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const obj1 = {}

        for (let i = 0; i < s.length; i++){
            if(obj1[s[i]]){
                obj1[s[i]] += 1;
            } else {
                obj1[s[i]] = 1;
            }
        }

        
        for ( let j = 0; j < t.length; j++ ){
            if(obj1[t[j]]){
                obj1[t[j]]--;

            }
            if(obj1[t[j]] === 0){
                    delete obj1[t[j]];
            }
        }

        return Object.keys(obj1).length === 0;
    }
}
