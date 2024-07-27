const NUMS = [1, 2, 3, -3, -2, 5, 6, -6];
/**
 * 구글 인터뷰
 */
function solution(nums) {
    let answer;
    let mNums = [];
    let pNums = [];

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        if (nums[i] < 0) mNums.push(nums[i]);
        if (nums[i] > 0) pNums.push(nums[i]);
    }

    answer = mNums.concat(pNums);
    
    return answer;
}


let resp = solution(NUMS);
console.log(`Result : ${resp}`);