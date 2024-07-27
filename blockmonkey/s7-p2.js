const NUMS = [13, 5, 11, 7, 23, 15];
/**
 * 선택정렬
 */
function solution(nums) {
    let answer = [...nums];

    // 최소값을 찾아 앞으로 보내는 정렬 방식.
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