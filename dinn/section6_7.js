const solution = (req, board)=>{
    let reqIdx = 0;
    for (let i in board){
        if (req[reqIdx] === board[i]){
            reqIdx++
        }
    }
   (reqIdx === req.length) ? console.log("YES") : console.log("NO") 
}
solution("CBA", "CBDAGE")