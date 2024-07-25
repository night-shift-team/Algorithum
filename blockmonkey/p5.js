const PRICES = [1, 2, 3, 2, 3];

function solution(prices) {
    let answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        let sec = 0;
        let point = prices[i];

        for (let j = i + 1; j < prices.length; j++) {
            sec++;
            if (point > prices[j]) break;
        }

        answer.push(sec);
    }

    return answer;
}


let resp = solution(PRICES);
console.log(`Result : ${resp}`);