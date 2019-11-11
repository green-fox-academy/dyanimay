let index = function(list, value) {
  for(let i = 0; i < list.length; i++){
    if (list[i] == value){
      return i;
    }
  }
}

module.exports = index;

// add('string', 'string');
// add(1, 'string');
// add(1, 2);