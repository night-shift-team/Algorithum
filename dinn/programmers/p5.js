const solution = (input)=>{
    const biggerIdx = Array.from({length: input.length}, ()=> 0);
    for (let i=0;i<input.length;i++){
        for (let j=i+1;j<input.length;j++){
            if (input[j] >= input[i])
                biggerIdx[i]++
        }
    }
    console.log(biggerIdx)
}
solution([1,2,3,2,3])