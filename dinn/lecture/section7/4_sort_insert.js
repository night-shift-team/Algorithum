const solution = (count, arr) =>{
    if (arr.length === 1) {console.log(arr[0]); return}
    for (let i=1;i<count;i++){
        for (let j=0;j<i;j++){
            if (arr[j] > arr[i]){
                temp = arr[j]
                arr[j] = arr[i];
                arr[i] = temp
            }
        }
    }
    console.log(arr)
}
solution(6, [11,7,5,6,10,9])
solution(5, [9,4,3,5,1])