function solution(participant, completion) {
     completion.forEach((p, i) => {
       const idx = participant.indexOf(p);

       if (idx >= 0) {
         participant.splice(idx, 1);
       }
     });

     return participant[0];
}


console.log(
  `정답 : ${solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )}`
);