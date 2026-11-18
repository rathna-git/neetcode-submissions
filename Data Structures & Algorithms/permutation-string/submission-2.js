class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const seen1 = new Array(26).fill(0);
        const seen2 = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0)
        

        for(let i = 0; i < s1.length; i++){
            const s1index = s1[i].charCodeAt(0) - aCode;
            seen1[s1index]++;

            const s2Index = s2[i].charCodeAt(0) - aCode;
            seen2[s2Index]++;

        }

        const frequenciesMatch = () => seen1.every((value, index) => value == seen2[index]);

        if(frequenciesMatch()) return true;

        for(let right = s1.length; right < s2.length; right++){
            const addNewIndex = s2[right].charCodeAt(0) - aCode;
            seen2[addNewIndex]++;

            const removeOldIndex = s2[right - s1.length].charCodeAt(0) - aCode;
            seen2[removeOldIndex]--;

            if(frequenciesMatch()) return true;
        }

        return false;

    }
}
