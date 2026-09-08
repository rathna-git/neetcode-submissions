class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let aster of asteroids){
            if(aster > 0){
                stack.push(aster);
            }else {
                while(stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(aster)){
                    stack.pop();
                }

                if(stack.length === 0 || stack[stack.length - 1] < 0){
                    stack.push(aster);
                }else if(stack[stack.length - 1] === Math.abs(aster)){
                    stack.pop();
                }
            }

            
        }

        return stack;
    }
}
