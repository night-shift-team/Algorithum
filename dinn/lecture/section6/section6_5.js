const solution = (input) =>{
  const stack = []
  const lazorStartIndex = [];
  const ironBongRange = [];
  for (let i=0;i<input.length;i++){
    if (i !== 0 && input[i-1] === "(" && input[i]=== ")"){
      lazorStartIndex.push(i-1)
      stack.pop()
      continue
    }
    if (stack.length != 0 && input[stack[stack.length-1]] === "(" && input[i] === ")"){
      ironBongRange.push([stack.pop(), i])
      continue;
    }
    stack.push(i)
  }
  let count = ironBongRange.length;
  for (let i of ironBongRange){
    for (let j of lazorStartIndex){
      if (i[0] <=j && i[1] >j){
        count++
      }
    }
  }
  console.log(count)
}
solution("()(((()())(())()))(())")
solution("(((()(()()))(())()))(()())")
