function section(N, K) {
    //왕자들 배열
    let princes = [];
    for (let i = 1; i <= N; i++) {
        princes.push(i);
    }
    let index = 0;
    while (princes.length > 1) {
        for (let count = 1; count < K; count++) {
            index++;
            if (index >= princes.length) {
                index = 0;
            }
        }
        princes.splice(index, 1);
    
        if (index >= princes.length) {
            index = 0;
        }
    }
    return princes[0];
}

const N = 8;
const K = 3;

console.log(section(N, K)); // 출력: 7
