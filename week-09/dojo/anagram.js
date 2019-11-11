let anagram = function(word1, word2) {
  let temp1 = word1.split('').sort().join('');
  let temp2 = word2.split('').sort().join('');

  // console.log(temp1);
  // console.log(temp2);
  if(temp1 === temp2){
    return true;
  } else {
    return false;
  }
}

module.exports = anagram;