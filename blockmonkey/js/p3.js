const PEOPLE = [70, 50, 80, 50];
const LIMIT = 100;

/**
 * 한 번에 2놈만 탈 수 있으니.. 투 포인터로 좁혀가면서 둘 간의 비교만 하면됨.
 */
function solution(people, limit) {
    let answer = 0;

    // SORT PEOPLE ASEC
    people.sort((a,b) => a - b);
    
    let stIdx = 0;
    let edIdx = people.length - 1; // 3  

    while (stIdx <= edIdx) {
        // st Pointer랑, ed Pointer랑 같이 탈 수 있는지 비교,
        // 같이 탈 수 있으면 stPointer + edPointer 둘다 태움
        if (people[stIdx] + people[edIdx] <= limit) {
            stIdx++;
        }

        // 같이 탈 수 없으면, 무거운놈만 태움
        edIdx--;

        answer++;
    }

    return answer;
}

const res = solution(PEOPLE, LIMIT);
console.log(res);