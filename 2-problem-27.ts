https://leetcode.com/problems/remove-element

function removeElement(nums: number[], val: number): number {
    let k = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k += 1;
        }
    }

    return k;
};

const nums2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(nums2, 2));
console.log(nums2);