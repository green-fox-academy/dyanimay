console.log("Hello World");

console.log(document);

let asd = "asd";
console.log(window);

let first = document.getElementById("first");
console.log(first);

let purples = document.getElementsByClassName("purple");
console.log(purples);

purples[0].getElementsByTagName("p")[0].innerText = "hello";
purples[1].innerHTML = "<p>hello2</p>"; //rewrites the second purple square which is the array[1]

console.log(document.querySelectorAll(".yellow > div:nth-child(odd)")); // picks every second element from the yellow div

let newElement = document.createElement("div");
console.log(newElement);
newElement.setAttribute("class","purple");
document.querySelector(".yellow").append(newElement);

newElement.onclick = function(){
  for (let i = 0; i < purples.length; ++i){
    purples[i].setAttribute("class", "purpleshrink");
  }
}
newElement.ondblclick = () => console.log("dupla szia");