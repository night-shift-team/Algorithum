const solution = (input)=>{
    const stack = []
    const openGualhoIdx = []
    for (let i=0; i<input.length;i++){
        if (input[i] === "("){
            openGualhoIdx.push(stack.length)
        }
        if (input[i] === ")"){
            for (let j=stack.length;j>openGualhoIdx[openGualhoIdx.length-1];j--){
                stack.pop()
            }
            openGualhoIdx.pop()
            continue;
        }
        stack.push(input[i])
    }
    let result= ""
    for (let i of stack){
        if (i === "(" || i === ")") continue;
        result +=i
    }
    console.log(result)
    console.log(stack.join)
}

solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")
