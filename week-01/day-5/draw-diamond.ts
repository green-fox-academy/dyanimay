
function renderDiamond(n) {
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 1; j < n-i; j++) {
        str = str + " ";
      }
      for (let k = 1; k <= (2*i+1); k++) {
        str = str + "*";
      }
      console.log(str);
    }
};
function renderDiamond2(n) {
    for (let i = 0; i < n-1; i++) {
        let str = "";
        for (let j = 1; j <= i+1; j++) {
          str = str + " ";
        }
        for (let k = 1; k < (2*(n-i-1)); k++) {
          str = str + "*";
        }
        console.log(str);
      }
}
  renderDiamond(4);
  renderDiamond2(4);