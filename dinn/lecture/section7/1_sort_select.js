const solution = (count, arr)=>{
    if (arr.length === 1) {console.log(arr[0]); return}
    for (let i=0;i<count;i++){
        for (let j=i+1;j<count;j++){
            if (arr[i]>arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr.join(' '))
}
solution(6, [13,5,11,7,23,15])