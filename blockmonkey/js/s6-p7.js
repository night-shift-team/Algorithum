const PRIOR = "CBA";
const MY_CLASS = "CBDAGE";

function solution(prior, classes) {
    let answer = false;
    let priorQ = prior.split('');

    for (let i = 0; i < classes.length; i++) {
        const cl = classes[i];
        // 현재 수업이 = priorQ[0] 과 같다면 큐에서 뺸다.
        if (priorQ[0] === cl) {
            priorQ.shift();
        }
    }

    if (priorQ.length === 0) {
        answer = true;
    }

    return answer;
}


let resp = solution(PRIOR, MY_CLASS);
console.log(`Result : ${resp}`);