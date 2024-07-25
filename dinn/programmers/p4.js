const solution = (input) =>{
    const arr = [];
    for (let i in input){
        if (arr[arr.length-1] === input[i]){
            continue
        }
        arr.push(input[i])
    }
    console.log(arr)
}

solution([1,1,3,3,0,1,1])
solution([4, 4, 4, 3, 3])