let one = 1;
let numberConverter = (number) => {
  let temp = number.toString().split('');
  
  let translate = (e) => {
    if(e){
      return 'one'
    }
  }
  
  console.log(temp[0] + 'hundred' + temp[1] + temp[2]);
  let indexes = temp.length;
  console.log(indexes)
}
numberConverter(745);