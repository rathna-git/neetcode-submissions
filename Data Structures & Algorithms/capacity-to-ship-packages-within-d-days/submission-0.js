class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((a,b) => a + b, 0);
        let res = right;

        const canShip = (capacity) => {
            let ships = 1;
            let currCapacity = capacity;

            for (const w of weights){
                if (w > currCapacity){
                    ships += 1;
                    currCapacity = capacity;
                }
                currCapacity -= w;
            }

            return (ships <= days);
        }

        while(left <= right){
            let capacity = left + Math.floor((right - left) / 2);

            if (canShip(capacity)){
                res = capacity;
                right = capacity - 1;
            } else {
                left = capacity + 1;
            }

        }


        return res;
    }
}
