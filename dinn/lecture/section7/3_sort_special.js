const solution = (count, arr) =>{
    let minus = []
    let plus =[]
    for (let v of arr){
        if (v<0){
            minus.push(v)
        } else{
            plus.push(v)
        }
    }
    minus.push(...plus)
    console.log(minus.join(' '))
}
solution(8, [1,2,3,-3,-2,5,6,-6])