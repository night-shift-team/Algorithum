const WORDS = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
// EFLM 괄호 사이 글자는 모두 제거하고 남은 글자를 표기하시오.

function solution(words) {
    let answer = "";
    let stack = [];
    let pureWords = [];

    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        // 괄호 열면, 괄호 스택 쌓고,
        if (w === '(') {
            stack.push(w);
            // 괄호 닫으면, 괄호 스택에서 뺴고
        } else if (w === ')') {
            stack.pop();
            // 스택값이 0인 상태에서 문자열 만나면, 결과값에 담고..    
        } else if (stack.length === 0) {
            pureWords.push(w);
            // 스택값이 0이 아닌 상태에서 문자열 만나면, 무시
        } else {
            continue;
        }
    }
    answer = pureWords.toString();
    return answer;
}

const resp = solution(WORDS);

console.log(`RESP : ${resp}`);