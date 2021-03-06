'use strict'

let btn = document.getElementsByClassName('button');
let pet = document.querySelectorAll('input[name=pet]');
let fact = document.querySelectorAll('input[name=facts]');

function click(){
  if (pet[0].checked == true || pet[1].checked == true){
    btn[1].removeAttribute('disabled');
  } else if (fact[0].checked == true){
    btn[0].removeAttribute('disabled');
  } else {
    btn[1].removeAttribute('disabled');
  };
}

function loveCats(){
  if (pet[0].checked == true || pet[1].checked == true || fact[0].checked == true){
    alert("Thank you, you've successfully signed up for cat facts");
  };
}

function hateCats(){
  if (pet[2].checked == true && fact[1].checked == true){
    alert('Sigh, we still added you to the cat facts list');
  }
}

//pet listeners
pet[0].addEventListener('click', function(){
  pet[0].checked == true;
  pet[2].checked == false;
  click();
});

pet[1].addEventListener('click', function(){
  pet[1].checked == true;
  click();
});

pet[2].addEventListener('click', function(){
  pet[0].checked == false;
  pet[1].checked == false;
  pet[2].checked == true;
});
//fact listeners
fact[0].addEventListener('click', function(){
  fact[0].checked == true;
  fact[1].checked == false;
  btn[0].removeAttribute('disabled');
})
fact[1].addEventListener('click', function(){
  fact[1].checked == true;
  fact[0].checked == false;
  btn[0].disabled = true;
})
// clicking on the 2 buttons 
btn[0].addEventListener('click', function(){
  event.preventDefault();
  loveCats();
});

btn[1].addEventListener('click', function(){
  event.preventDefault();
  if (pet[2].checked == true && fact[1].checked == true){
    hateCats();
  } else {
    loveCats();
  }
});