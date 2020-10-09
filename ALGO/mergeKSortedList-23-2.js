var mergeKLists = function(lists) {
    if (!lists.length) return "";

    const arr = [];

    for( const head of lists){
        let tHead = head;
        while(tHead) {
            arr.push(tHead);
            tHead = tHead.next;
        }
    }

	// this effective functions like a priority queue...
    arr.sort( (a,b) => a.val - b.val)
    for(let i = 0; i < arr.length - 1; i++) arr[i].next = arr[i+1];


    if(arr.length) {
        arr[arr.length-1].next = null;
        return arr[0] ;
    }

    return "";
};
