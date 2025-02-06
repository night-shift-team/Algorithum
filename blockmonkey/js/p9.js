function solution(participant, completion) {
     completion.forEach((p, i) => {
       const idx = participant.indexOf(p);

       if (idx >= 0) {
         participant.splice(idx, 1);
       }
     });

     return participant[0];
}

function solution2(participant, completion) {
  const map = new Map();

  participant.forEach((p, i) => {
    const eValue = map.get(p);
    map.set(p, (eValue || 0) + 1);
  });

  completion.forEach((c, i) => {
    const eValue = map.get(c);
    map.set(c, eValue - 1);
  });

  for (const [k, v] of map) {
    if (v > 0) {
      return k;
    }
  }
}


console.log(
  `정답 : ${solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )}`
);