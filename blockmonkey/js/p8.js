function solution(nums) {
  var answer = 0;
  let selectMaxCount = nums.length / 2;
  const uniqueArray = [...new Set(nums)];
  const uniqueArrayCount = uniqueArray.length;

  if (uniqueArrayCount > selectMaxCount) {
    answer = selectMaxCount;
  } else {
    answer = uniqueArrayCount;
  }

  return answer;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));