// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。


var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while(curr){
        let temp=curr.next; // 缓存第一个值
        curr.next = prev;  // 指向prev
        prev=curr; // 指向下一个
        curr=temp; // 保存下一位
    }
    return prev;
};

