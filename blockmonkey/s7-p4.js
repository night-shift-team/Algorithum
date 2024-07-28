const NUMS = [11,7,5,6,10,9];

/**
 * 삽입정렬
 * Key 값을 뽑아서, 앞에 요소들과 비교하여 정렬함.
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