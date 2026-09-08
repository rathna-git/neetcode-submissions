class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 0;
        let right = x;
        let result = 0;

        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);
            if(mid * mid === x){
                return mid;
            }else{
                if(mid * mid < x){
                    result = mid;
                    left = mid + 1;
                }else if(mid * mid > x){
                    right = mid - 1;
                }
            }
        }
        return result;
    }


}
