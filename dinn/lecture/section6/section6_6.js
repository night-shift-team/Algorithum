const solution = (n, k) =>{
    let queue = "";
    for (let i=1;i<=n;i++){
        queue += i.toString()
    }

    let start = k-1
    while(true){
        if (start > queue.length-1 ){
            start = start-queue.length
            if (start > queue.length-1) continue;
        }
        if (queue.length == 1) {
            console.log(queue[0])
            break;
        };
        queue = queue.substring(0, start)+queue.substring(start+1)
        start += k-1
    }
}

solution(8,3)
