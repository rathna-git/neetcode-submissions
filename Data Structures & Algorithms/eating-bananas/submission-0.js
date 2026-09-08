class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let speed = right;

        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);
            let totalTime = 0;

            for(let p of piles){
                totalTime += Math.ceil(p/mid);
                if(totalTime > h) break;
            }

            if(totalTime <= h){
                speed = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return speed;
    }
}
