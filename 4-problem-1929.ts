// https://leetcode.com/problems/concatenation-of-array/

function getConcatenation(nums: number[]): number[] {
    let ans = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
};

const nums4 = [1,3,2,1];
console.log(getConcatenation(nums4));