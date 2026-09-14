class MyHashMap {
    constructor() {
        this.bucketCount = 1009;
        this.buckets = Array.from(
            {length: this.bucketCount},
            () => []
        )
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const bucketIndex = key % this.bucketCount;
        const bucket = this.buckets[bucketIndex];

        for(let i = 0; i < bucket.length; i ++){
            if(bucket[i][0] === key){
                bucket[i][1] = value
                return;
            }   
        }
        bucket.push([key,value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const bucketIndex = key % this.bucketCount;
        const bucket = this.buckets[bucketIndex];

        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                return bucket[i][1];
            } 
        }   
            return -1;

    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucketIndex = key % this.bucketCount;
        const bucket = this.buckets[bucketIndex];

        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                bucket.splice(i, 1);
                return
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
