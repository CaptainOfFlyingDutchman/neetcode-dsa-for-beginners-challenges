// https://leetcode.com/problems/baseball-game

function calPoints(operations: string[]): number {
    const stack = [];

    operations.forEach(opr => {
        switch(opr) {
            case '+': {
                const first = stack[stack.length - 1];
                const second = stack[stack.length - 2];
                stack.push(first + second);
                break;
            }
            case 'D': {
                const last = stack[stack.length - 1];
                stack.push(last * 2);
                break;
            }
            case 'C': {
                stack.pop();
                break;
            }
            default: {
                stack.push(parseInt(opr, 10));
            }
        }
    })

    return stack.reduce((a, c) => a + c, 0);
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))