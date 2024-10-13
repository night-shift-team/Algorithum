const NUMS = [13, 5, 11, 7, 23, 15];
/**
 * 버블정렬
 * 인접한요소 2개씩 비교하여 스위칭
 */
function solution(nums) {
    let answer = [...nums];

    for (let i = 0; i < answer.length; i++) {
        const x = answer[i];
        const y = answer[i + 1];

        if (x > y) {
            answer[answer.indexOf(x)] = y;
            answer[answer.indexOf(y)] = x;
        }
    }
    
    console.log(answer);
    return answer;
}


let resp = solution(NUMS);
console.log(`Result : ${resp}`);