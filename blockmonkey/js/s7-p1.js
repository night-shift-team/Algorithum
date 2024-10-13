const NUMS = [13, 5, 11, 7, 23, 15];
/**
 * 선택정렬
 * 최소값을 찾아 앞으로 보내는 정렬 방식.
 */
function solution(nums) {
    let answer = [...nums];

    // 최소값을 찾아 앞으로 보내는 정렬 방식.
    for (let i = 0; i < answer.length; i++) {
        let minVal = Number.MAX_VALUE;

        // 최소값 탐색
        for (let j = i + 1; j < answer.length; j++) {
            if (minVal > answer[j]) {
                minVal = answer[j];
            }
        }

        // Array에서 현재값 <-> 최소값 스위칭
        if (answer[i] > minVal) {
            answer[answer.indexOf(minVal)] = answer[i];
            answer[i] = minVal
        }
    }

    return answer;
}


let resp = solution(NUMS);
console.log(`Result : ${resp}`);