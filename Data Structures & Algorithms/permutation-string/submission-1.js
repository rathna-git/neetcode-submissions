class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const seenS1 = new Array(26).fill(0);
        const seenS2 = new Array(26).fill(0)
        const aCode =  'a'.charCodeAt(0)
        
        for(let i = 0; i < s1.length; i++){
            const S1index = s1[i].charCodeAt(0) - aCode;
            seenS1[S1index]++;

            const S2index = s2[i].charCodeAt(0) - aCode;
            seenS2[S2index]++;

        }

        const frequenciesMatch = () => seenS1.every((value, index) => value === seenS2[index]);
        

        if(frequenciesMatch()) return true;


        for(let right = s1.length; right < s2.length; right++){
            
            const newCharIndex = s2[right].charCodeAt(0) - aCode;

            seenS2[newCharIndex]++;

            const removeCharIndex = s2[right - s1.length].charCodeAt(0) - aCode;

            seenS2[removeCharIndex]--;

            if(frequenciesMatch()) return true;     
        }

        return false;
    }
}
