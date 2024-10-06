const ARR = [1, 1, 3, 3, 0, 1, 1];

function solution(arr) {
    let answer = [];
    let copyArr = [...arr];

    for (let i = 0; i < copyArr.length; i++) {
        if (copyArr[i] !== answer[answer.length-1]) {
            answer.push(copyArr[i]);   
        }
    }

    return answer;
}


let resp = solution(ARR);
console.log(`Result : ${resp}`);