
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
//    1.
    const map = new Map();

    nums.sort((a,b)=>a-b);

    for(let num of nums){
        console.log(map.get(num-1),'--')
        map.set(num,map.get(num-1) +1 ||1)
    }

    let ans = 0;
    // 4.取最大值
    for (const [index, value] of map) {
        ans = Math.max(ans, value)
    }
    // 5.返回
    return ans
};
