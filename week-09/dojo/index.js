let index = function(list, value) {
  for(let i = 0; i < list.length; i++){
    if (list[i] == value){
      return i;
    } 
  }
  return -1;
}

module.exports = index;
