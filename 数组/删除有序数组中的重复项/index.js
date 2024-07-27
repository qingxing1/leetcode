// 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
//
// 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
//
// 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
// 返回 k 。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function(nums1, m, nums2, n) {
    let fisrtPoint=m-1;
    let secndPoint=n-1;
    while(fisrtPoint>=0 && secndPoint>=0){
        // 对比大小给最后一个
        if(nums1[fisrtPoint] > nums2[secndPoint]){
            nums1[fisrtPoint+secndPoint+1]=nums1[fisrtPoint];
            fisrtPoint--
        }else{
            nums1[fisrtPoint+secndPoint+1] = nums2[secndPoint];
            secndPoint--
        }
    }
    if(secndPoint >=0){
        for(let i=0; i<=secndPoint;i++) nums1[i]=nums2[i]
    }
    return nums1;
};

console.log(merge1([8,9,7,0,0,0],3,[1,3,8],3),'123')


// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
//
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;
    // 遍历
    nums.forEach(item => {
        // 碰到与j所指向的值不同的数据将其保存在j+1的位置上
        if ( nums[j] != item ) {
            nums[++j] = item;
        };
    });
    console.log(nums,'--nums')
    return j + 1;
};

console.log(removeDuplicates([1,1,2,3,3]))


