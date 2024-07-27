/**
  * Definition for singly-linked list.
  * function ListNode(val, next) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.next = (next===undefined ? null : next)
  * }
  */
/**
  * @param {ListNode} head
  * @param {number} n
  * @return {ListNode}
  */
var removeNthFromEnd = function(head, n) {
    // 创建虚拟头节点
    let dummy = new ListNode(0);
    dummy.next=head;
    // 头节点
    let fast = dummy;
    // 指向第n个的节点
    let slow=dummy;
    // 当fast到达链表末尾时，slow指向要删除的节点的前一个节点
    for(let i=0;i <=n;i++){
        fast=fast.next;
    }
    // 删除节点
    while(fast !== null){
        slow=slow.next;
        fast=fast.next;
    }
    //删除
    slow.next = slow.next.next;
    // 返回虚拟头节点的下一个节点，即修改后的链表头节点
    return dummy.next
};

