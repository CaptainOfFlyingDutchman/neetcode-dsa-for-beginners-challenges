// https://leetcode.com/problems/min-stack

class MinStack {
    constructor(private stack: number[] = [], private minStack: number[] = []) {
    }

    push(val: number): void {
        this.stack.push(val);
        const minStackTop = this.minStack[this.minStack.length - 1];
        if (!!this.minStack.length) {
            this.minStack.push(val < minStackTop ? val : minStackTop);
        } else {
            this.minStack.push(val);
        }
    }

    pop(): void {
       this.stack.pop();
       this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}



 var obj = new MinStack()
 obj.push(-2)
 obj.push(0)
 obj.push(-3)
 console.log(obj.getMin());
 console.log(obj.pop());
 console.log(obj.top());
 console.log(obj.getMin());
