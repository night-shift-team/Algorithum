function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    let cases = [];

    // 1. alphabet으로 구현할 수 있는 모든 경우의 case를 만듦.
    function generateWords(currentWord, len) {
        // 5글자 이상 카트
        if (len > 5) {
            return
        };

        cases.push(currentWord);

        // 알파벳 순회 재귀 호출하여 모든 케이스 만들 것.
        for (let i = 0; i < alphabets.length; i++) {
            generateWords(currentWord + alphabets[i], len + 1);
        }
    }
    
    generateWords("", 0);

    // 2. 주어진 단어의 위치를 확인,
    let answer = cases.indexOf(word);
    return answer;
}

const result = solution("AAAAE");
console.log(result);