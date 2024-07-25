const solution = (input)=>{
    const stack = [];
    for (let i of input){
        const num = parseInt(i)
        if (!isNaN(num)){
            //숫자
            stack.push(num)
        }else{
            //연산자
            const second  = stack.pop()
            const first = stack.pop()
            switch (i){
                case "+":
                    stack.push(first+second)
                    break;
                case "-":
                    stack.push(first-second)
                    break;
                case "*":
                    stack.push(first*second)
                    break;
                case "/":
                    stack.push(first/second)
                    break;
            }
        }
    }
    console.log(stack.pop())
}
solution("352+*9-")