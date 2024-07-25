function solution(priorities, location) {
    let obj = new Map();
    for (let v of priorities){
        if (obj.has(v)) {
            let plus = obj.get(v)
            obj.set(v, plus+1)
        }
        else{
            obj.set(v, 0)
        }
    }
    let priorityIdxCnt = []
    obj.forEach((value,key)=>{
        priorityIdxCnt.push({key:key, value:value})
    })

    priorityIdxCnt.sort((a,b)=>a.key - b.key)
    console.log(priorityIdxCnt)

    let priorityPair=[];
    for (let i in priorities){
        priorityPair.push({key:i, value:priorities[i]})
    }

    let cnt = 0;
    while(priorityPair.length != 0){
        let lastIdxCnt = priorityIdxCnt.length-1
        if (priorityPair[0].value < priorityIdxCnt[lastIdxCnt].key ){
            priorityPair.push(priorityPair.slice(0,1)[0])
            priorityPair = priorityPair.slice(1)
            continue;
        }
        let target = priorityPair.slice(0,1)[0].key
        priorityPair = priorityPair.slice(1)
        let lastKeyCount = priorityIdxCnt[lastIdxCnt].value
        if (lastKeyCount != 0){
            priorityIdxCnt[lastIdxCnt].value = lastKeyCount--
        }else{
            priorityIdxCnt.pop()
        }
        cnt++
        if (target == location){
            console.log(cnt)
            return
        }
    }
}
solution([2,1,3,2], 2)
solution([1,1,9,1,1,1], 0)
