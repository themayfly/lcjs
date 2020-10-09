
var mergeKLists = function(lists) {

    const merge = (l1, l2) => {
        if (!l2) {
            return l1;
        }
        if (!l1) {
            return l2;
        }
        if (l1.val < l2.val) {
            l1.next = merge(l1.next, l2);
            return l1;
        }
        else {
            l2.next = merge(l1, l2.next);
            return l2;
        }
    }

    while (lists.length > 1) {
        const a = lists.shift();
        const b = lists.shift();
        lists.push(merge(a, b));
    }

    return lists[0] || null;
};
