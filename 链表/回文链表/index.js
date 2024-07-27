// 给你一个单链表的头节点 head ，请你判断该链表是否为
// 回文链表
// 。如果是，返回 true ；否则，返回 false 。




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function(head) {
    const arr = [];
    // 用数组存储值
    while(head){
        arr.push(head.val)
        head=head.next;
    }
    // 用数组来求
    for(let i=0; i < arr.length / 2; i++){
        if(arr[i] != arr[arr.length-i-1]){
            return false;
        }
    }
    return true;
};
