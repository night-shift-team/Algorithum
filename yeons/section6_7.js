function section6(item) {
    // 필수 순서
    const order = 'CBA';

    let index = 0;
    
    for (let i = 0; i < item.length; i++) {
      if (item[i] === order[index]) {
        index++;
      }
      // 모든 필수 순서를 찾았으면 종료
      if (index === order.length) {
        return 'YES';
      }
    }
  // 못찾았으면 NO
    return 'NO';
  }

  console.log(section6('CGFBA')); 
  
  console.log(section6('BAC')); 


  