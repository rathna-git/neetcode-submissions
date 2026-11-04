class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalVol = 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;

        while (left < right){
            
            if(height[left] <= height[right]){
                leftMax = Math.max(leftMax, height[left]);
                totalVol += leftMax - height[left];

                left++;
            } else {
                rightMax = Math.max(rightMax, height[right]);
                totalVol += rightMax - height[right];

                right--;
            }

        
        }

        return totalVol;
    }
}
