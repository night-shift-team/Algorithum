function solution(begin, target, words) {
    // word 목록에 target 없으면 나가리
    if (!words.includes(target)) {
        return 0
    };
    // 큐
    let queue = [[begin, 0]];

    while (queue.length > 0) {
        const [current, steps] = queue.shift();

        if (current === target) {
            return steps
        };
        
        words.forEach((word, index) => {
            if (isConvertible(current, word)) {
                queue.push([word, steps + 1]);
                words[index] = "";
            }
        });
    }
    return 0;
}

// 한글자 이상 바꾸기 금지 체크
function isConvertible(word1, word2) {
  let diff = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diff++;
    if (diff > 1) return false;
  }

  return diff === 1;
}

console.log(
    solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
