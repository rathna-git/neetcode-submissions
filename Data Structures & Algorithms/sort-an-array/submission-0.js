class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    mergeSort(arr, l, r){
        if( l >= r) return;
        let mid = Math.floor((l + r) / 2);

        this.mergeSort(arr, l, mid);
        this.mergeSort(arr, mid + 1, r);
        this.merge(arr, l, mid, r);
    }

    merge(arr, l, mid, r){
        let temp = [];
        let i = l;
        let j = mid + 1;
        
        while(i <= mid && j <= r){
            if(arr[i] <= arr[j]){
                temp.push(arr[i++]);
            } else {
                temp.push(arr[j++]);
            }
        }
        while(i <= mid) temp.push(arr[i++]);
        while(j <= r) temp.push(arr[j++]);

        for(let k = l; k <= r; k++){
            arr[k] = temp[k - l];
        }
    }
}
