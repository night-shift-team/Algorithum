const SIZES = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]

// 명함 지갑의 최소 크기 값을 구하라 !
function solution(size) {
    let answer;

    // 1. 2차원 배열을 순회하면서, 더 큰값을 앞으로, 더 작은 값을 뒤로 보내도록 정렬함.
    size.map(ary => {
        ary.sort((a, b) => b - a);
    })

    // 2. 0번쨰 인덱스의 최대값, 1번째 인덱스의 최대값을 찾고, 그걸 사이즈로 정하면 됨.
    let lMax = 0;
    let rMax = 0;

    for (let i = 0; i < size.length; i++) {
        const left = size[i][0];
        const right = size[i][1];

        // 0번째 인덱스 최대값을 찾아라.
        if (left > lMax) {
            lMax = left;
        }

        // 1번째 인덱스 최대값을 찾아라.
        if (right > rMax) {
            rMax = right;
        }
    }

    // answer = 사각형 너비;
    answer = lMax * rMax;

    return answer;
}

const result = solution(SIZES);
console.log(result);