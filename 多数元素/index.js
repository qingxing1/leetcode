// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
//
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n=nums.length
    const SumMap = new Map();
    for(let i of nums){
        SumMap.set(i,(SumMap.get(i)||0)+1)
        if(SumMap.get(i)>=n/2)
        {
            return i
        }
    }
};
