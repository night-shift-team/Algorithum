const solution = (count, arr) =>{
    if (arr.length === 1) {console.log(arr[0]); return}
    for (let round=1;round<count;round++){
        for (let i=0;i<count-round;i++){
            if (arr[i]> arr[i+1]){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
    }
    console.log(arr.join(' '))
}
solution(6, [13,7,11,23,15,5])