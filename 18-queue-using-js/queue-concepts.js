
/**
 * 
 * Queue: FIFO - first in first out
 * 
 * Enqueue -> Push
 * Dequeue -> Pop
 * 
 * 
 * Steps-
 * 
 * 1. remove queue Front
 * 2. Shift all element 1 index left
 * 3. Decrease value of rear by 1
 * 
*/


const MAX_SIZE = 30;

class Queue{
    constructor() {
        this.front = 0;
        this.rear = 0;
        this.queue = new Array(MAX_SIZE)
    }

    // add element in front of array
    enqueue(item){

        if(this.rear === MAX_SIZE){
            console.log('Queue is full');
            return false;
        }
        
        this.queue[this.rear++] = item;

    }

    dequeue(){

        if(this.isEmpty()){
            console.log('Queue is empty');
        }

        const item = this.queue[this.front];

        for (let i = this.front; i < this.rear -1 ; i++) {
            this.queue[i] = this.queue[i+1];
        }
        delete this.queue[--this.rear];
        return
    }

    showQueue(){
        if(this.isEmpty()){
            console.log('Queue is empty');
        }

        for (let i = this.front; i < this.rear; i++) {
            console.log('[Displaying]', this.queue[i]);
        }

    }

    next(){
        if(this.isEmpty()){
            console.log('Queue is empty');
        }
        return this.queue[this.front]
    }

    isEmpty(){
        return this.front === this.rear
    }

}




  

