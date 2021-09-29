const twoSum = (nums, target) => {
    const firstIndexes = new Map();

    for (let num in nums) {
        const firstIndex = firstIndexes.get(nums[num]);
        if (firstIndex) {
            return [firstIndex, num];
        }

        const secondNumber = target - nums[num];
        firstIndexes.set(secondNumber, num);
    }
}

const testSuite = [
    {
        9: [2, 7, 11, 15]
    },
    {
        6: [3, 2, 4],
    },
    {
        6: [3, 0, -2, 8, 3],
    }
];

testSuite.forEach((entry) => {
    const target = Object.keys(entry)[0];
    const nums = entry[target];

    console.log(twoSum(nums, target));
});
