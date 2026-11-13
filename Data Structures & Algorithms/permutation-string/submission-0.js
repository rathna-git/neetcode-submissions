class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const seenS1 = new Array(26).fill(0);
        
        for(let i = 0; i < s1.length; i++){
            const index = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
            seenS1[index] += 1;
        }
        console.log("s1", seenS1)

        let left = 0;
        let right = s1.length - 1;
        

        while(right < s2.length){
            const seenS2 = new Array(26).fill(0);

            for( let j = left; j <= right; j++){
                const index = s2[j].charCodeAt(0) - 'a'.charCodeAt(0);
                seenS2[index] += 1;
            }

            console.log("s2",seenS2)

            if(seenS1.every((value, index) => value === seenS2[index])){
                return true;
            } 

            seenS2.fill(0);
            
            left++;
            right++;
            
            
        }

        return false;
    }
}
