// 两两交换链表中的节点
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
        // 创建虚假头节点
        let pre=new ListNode(0);
        pre.next =head;
        let temp=pre;
        //  如果为奇数 则最后一个不需要完成切换 如果为偶数，则最后的temp.next会指向null
        while(temp.next && temp.next.next){
            // 第一个
            let start=temp.next;
            // 第三个
            let end=temp.next.next.next;
            // 虚拟头节点指向第二个
            temp.next=temp.next.next;
            //  第二个指向第一个
            temp.next.next=start;
            // 第一个指向第三个
            start.next=end;
            temp=temp.next.next
        }

        return pre.next;
};
