
/**
 * Implement A basic Stack
 * 
 * */ 

const MAX_SIZE = 30;


class Stack{
    constructor(){
        this.list = new Array(MAX_SIZE);
        this.top = -1;
    }

    // add value in stack
    push(item){
        if(this.top >= MAX_SIZE){
            console.log('Stack Overflow!');
            return false;
        }
        this.list[++this.top] = item;
        return true;
    }

    // remove element from top
    pop(){
        if(this.isEmpty()){
            console.log('Stack Underflow');
            return false;
        }
        let item = this.list[this.top];
        delete this.list[this.top];
        this.top--;
        return item;

    }

    // return top element
    peek(){
        if(this.isEmpty()){
            console.log('Stack Underflow');
            return false;
        }
        return this.list[this.top]

    }

    // check stack is empty or not
    isEmpty(){
        return this.top < 0;
    }
}

module.exports = Stack;


