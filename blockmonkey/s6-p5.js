const words = '()(((()())(())()))(())';

function solution(words) {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < words.length; i++) {
        const current = words[i];
        const prev = words[i - 1];

        // 여는 괄호 일때,
        if (current === '(') {
            // 스택에 쌓음.
            stack.push(current);
        } else {
            // 닫는 괄호 만났을 때,
            stack.pop();
            // 이전 값이 여는 괄호면 (레이저)라서, 짝대기들 쌓인거 더함.
            if (prev === '(') {
                answer += stack.length;
            } else {
                // 이전 값이 여는 괄호가 아니라면, 짝대기 +1
                answer += 1;
            }
        }
    }

    return answer;
}


let resp = solution(words);
console.log(`Result : ${resp}`);