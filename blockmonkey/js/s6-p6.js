const princes = 8;
const pickNum = 3;

function solution(princes, pickNum) {
    let answer = 0;
    let q = [];

    // 1. 왕자를 큐에 담는다.
    for (let i = 0; i < princes; i++) {
        q.push(i+1);
    }

   
    let c = 0;
    while (q.length > 1) {
        const outPrice = q.shift();
        // PickNum - 1 번쨰 왕자는 아웃
        if (c === pickNum - 1) {
            c = 0;
            continue;
        } else {
            // 나머지는 다시 큐로 들어가.
            q.push(outPrice)
        }
        c++;    
    }
    
    answer = q[0];
    return answer;
}


let resp = solution(princes, pickNum);
console.log(`Result : ${resp}`);