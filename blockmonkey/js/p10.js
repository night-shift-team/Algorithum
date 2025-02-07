function solution(phone_book) {
    var answer = true;
    const map = new Map();

    phone_book.forEach((p, i) => {
        map.set(p, true);
    });

    phone_book.forEach((phone, i) => {
        let prefix = "";

        // 한글자씩 순회 ㄱ
        for (let i = 0; i < phone.length; i++) {
            prefix += phone[i]; 
            console.log(prefix, phone);
            
            // 이건 지니까 빼고
            if (phone !== prefix) { 
                console.log(`Prefix && Phone [i] 값이 동일 !`);
                if (map.has(prefix)) {
                    console.log("찾았다 요놈!");
                    answer = false;
                    return answer
                }
            }

        }
    });

  return answer;
}


console.log(solution(["123", "456", "789"]));