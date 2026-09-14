class MyHashSet {
    constructor() {
        this.bucketCount = 1009;
        this.buckets = Array.from(
            {length: this.bucketCount},
            () => [] 
        )
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const bucketIndex = key % this.bucketCount;
        const bucket = this.buckets[bucketIndex];
        
        if(!bucket.includes(key)){
            bucket.push(key)
        }
        
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucketIndex = key % this.bucketCount;
        const bucket = this.buckets[bucketIndex];
        const keyIndex = bucket.indexOf(key);

        if(keyIndex !== -1){
            bucket.splice(keyIndex, 1)
        }

    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const bucketIndex = key % this.bucketCount;
        const bucket = this.buckets[bucketIndex];

        return bucket.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
