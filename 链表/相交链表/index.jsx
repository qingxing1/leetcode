// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
//
// 题目数据 保证 整个链式结构中不存在环。
//
// 注意，函数返回结果后，链表必须 保持其原始结构 。




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let pa=headA;
    let pb=headB;
    //  由于两个长度不同，所以需要统一。 A链+B链的长度等于B链+A链的长度。如果存在焦点则焦点就是他们的终点
    while(pa !==pb){
        pa = pa === null ? headB : pa.next;
        pb = pb===null ? headA :pb.next;
    }
    return pa
};
