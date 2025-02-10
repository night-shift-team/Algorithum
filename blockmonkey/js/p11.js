function solution(numbers, target) {
    let answer = 0;
    let q = [0];

    for (let i = 0; i < numbers.length; i++) {
        const temp = [];

        while (q.length > 0) {
            const currentSum = q.shift();
            temp.push(currentSum + numbers[i]);
            temp.push(currentSum - numbers[i]);
        }
        
        q = temp;
    }

    answer = q.filter((sum) => sum === target).length;

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));