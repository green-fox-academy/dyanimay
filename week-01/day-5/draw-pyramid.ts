let lineNumber = 5;
    for (let i = 0; i < lineNumber; i++) {
      let str = '';
      for (let j = 1; j < lineNumber-i; j++) {
        str = str + ' ';
      }
      for (let k = 1; k <= (2*i+1); k++) {
        str = str + '*';
      }
      console.log(str);
    }