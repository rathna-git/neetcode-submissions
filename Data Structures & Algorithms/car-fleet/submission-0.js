class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        for(let i = 0; i < position.length; i++){
            const time_to_target = (target - position[i])/speed[i];
            cars.push([position[i], time_to_target]);
        }

        cars.sort((a,b) => b[0] - a[0])

        const stack = [];
        for(let [pos, time] of cars){
            if(stack.length === 0 || time > stack[stack.length - 1]){
                stack.push(time);
            }
        }
        return stack.length;
    }
}
