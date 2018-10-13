/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyQueue = function(k) {
    this.size = k;
    this.head = -1;
    this.data = [];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyQueue.prototype.enQueue = function(value) {
    if( this.isFull()){
        return false;
    }
    if(this.isEmpty()){
        this.head = 0;
    }else{
        this.head++;
    }
    this.data.push(value);
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyQueue.prototype.deQueue = function() {
    if( this.isEmpty() ){
        return false;
    }
    this.data.unshift();
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyQueue.prototype.Front = function() {
    if( this.isEmpty()){
        return false;
    }
    return this.data[0]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyQueue.prototype.Rear = function() {
    if( this.isEmpty()){
        return false;
    }

    return this.data[this.data.length -1]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyQueue.prototype.isEmpty = function() {
    return this.head == -1
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyQueue.prototype.isFull = function() {
    return this.size === this.data.length;
};

