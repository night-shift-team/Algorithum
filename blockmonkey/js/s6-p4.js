const WORDS = '352+*9-';

function solution(words) {
    let answer = 0;
    let stack = [];
    
    for (i of words) {
        //숫자인 경우
        if (!isNaN(i)) {    
            stack.push(Number(i));
        }

        // 연산자인경우,
        if (isNaN(i)) {
            const prev = stack.pop();
            const next = stack.pop();

            switch (i) {
                case '+':
                    stack.push(next + prev); 
                    break;
                case '-':
                    stack.push(next - prev);
                    break;
                case '*':
                    stack.push(next * prev);
                    break;
                case '/':
                    stack.push(next / prev);
                    break;
                default:
                    console.log(`유효하지않은 연산자 : ${i}`);
                    break;
            }
        }
    }

    answer = stack[0];

    return answer;
}

const resp = solution(WORDS);
console.log(`RESP : ${resp}`)
