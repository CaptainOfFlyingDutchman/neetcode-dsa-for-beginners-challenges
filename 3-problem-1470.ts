// https://leetcode.com/problems/shuffle-the-array

function shuffle(nums: number[], n: number): number[] {
    let shuffled = [];

    for (let i = 0; i < n; i++) {
        shuffled.push(nums[i], nums[i + n]);    
    }

    return shuffled;
};

const nums3 = [1,2,3,4,4,3,2,1];
console.log(shuffle(nums3, 4));
console.log(nums3);