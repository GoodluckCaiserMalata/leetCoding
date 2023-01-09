// BRUTE FORCE ITERATION METHOD

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(arr, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (arr[i] + arr[j] === target) {
                return arr[i, j]
            }
        }
    }
}