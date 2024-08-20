const solution = (count, arr) =>{
    const arrCopy = arr.slice();
    let hyunsuIdx;
    let mateIdx;
    let hyunsuSelected = false;
    arr.sort((a,b) => a-b)

    arr.forEach((v,i)=>{
        if (arr[i] !== arrCopy[i]){
            if (!hyunsuSelected) {
                hyunsuIdx = i;
                hyunsuSelected = true
            }else{
                mateIdx = i;
            }

        }
    })
    console.log(hyunsuIdx+1, mateIdx+1)
}
solution(9, [120,125,152,130,135,135,143,127,180])
solution(6, [120,130,150,150,130,150])