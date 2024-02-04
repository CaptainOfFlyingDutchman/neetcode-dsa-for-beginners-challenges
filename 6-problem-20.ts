// https://leetcode.com/problems/valid-parentheses

function isValid(s: string): boolean {
    const stack = [];
    const hash = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        
        if (Object.keys(hash).includes(c)) {
            if (stack[stack.length - 1] === hash[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    return !!stack.length ? false : true;
};

console.log(isValid("()[]{}"));