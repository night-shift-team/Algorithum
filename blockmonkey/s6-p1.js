const WRONG_BRACKETS = '(()(()))(()';
const RIGHT_BRACKETS = '{(())}'

function solution(brackets) {
    let answer = false;

    // 30자 제한
    if (brackets.length > 30) return;

    // Stack 생성;
    let stack = [];

    for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets[i];
        console.log(stack)
        
        // 1. 여는 괄호면 넣고
        if (bracket === "(" || bracket === "{") {
            stack.push(bracket);
        }

        // 2. 닫는 괄호면 빼고
        if (bracket === ")" || bracket === "}") {
            stack.pop(bracket);
        }
    }

    // Stack에 남은 값이 없다면, true
    if (stack.length === 0) {
        answer = true
    }

    return answer;
}

const resp1 = solution(WRONG_BRACKETS);
const resp2 = solution(RIGHT_BRACKETS);

console.log(`RESP 1 : ${resp1} | RESP 2 : ${resp2}`);