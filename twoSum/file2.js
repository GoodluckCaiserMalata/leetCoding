// HASH MAP

function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        let num2 = target - num1
        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i)
    }
}