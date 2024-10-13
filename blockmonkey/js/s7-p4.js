const NUMS = [11,7,5,6,10,9];

/**
 * 삽입정렬
 * 정렬라인, 비정렬 라인 구분하여 Key를 뽑아 정렬라인과 비교하여 스위칭.
 */
function solution(nums) {
    let answer = [...nums];

    // Loop Key
    for (let i = 1; i < answer.length; i++) {
        const key = answer[i];

        // Loop Sorted
        for(let j = i-1; j >= 0; j--) {
            const sorted = answer[j];
            // 위치 변경
            if(key < sorted) {
                answer[j+1] = sorted;
                answer[j] = key;
            }
        }
    }

    return answer;
}

let resp = solution(NUMS);
console.log(`Result : ${resp}`);