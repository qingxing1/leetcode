
// 合并两个有序链表
/**
  * Definition for singly-linked list.
  * function ListNode(val, next) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.next = (next===undefined ? null : next)
  * }
  */
/**
  * @param {ListNode} list1
  * @param {ListNode} list2
  * @return {ListNode}
  */
var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }
    let newLink = {
        val: undefined,
        next: null
    }
    let new_p = newLink
    let p1 = list1
    let p2 = list2
    while(p1 && p2){
        if (p1.val > p2.val) {
            new_p.next = p2
            p2 = p2.next
        } else {
            new_p.next = p1
            p1 = <p1 className="next"></p1>
        }
        new_p = new_p.next
    }
    new_p.next = p1 ? p1 : p2
    return new_p
};
