"use strict";

let ourRequest = new XMLHttpRequest(); //mandatory
ourRequest.open("GET", "http://localhost:8080/posts", true);

let postContainer = document.querySelector("article");
ourRequest.onload = () => {
  let outData = JSON.parse(ourRequest.responseText);
  for (let i = 0; i < ourData.posts.length; i++) {
    let posts = document.createElement("div");
    let votedivs = document.createElement("div");
    let postdivs = document.createElement("div");
    let upvote = document.createElement("button");
    let score = document.createElement("p");
    let downvote = document.createElement("button");
    let title = document.createElement("h1");
    let links = document.createElement("a");
    let modify = document.createElement("a");
    let remove = document.createElement("a");
    let linkdivs = document.createElement("div");
    let time = document.createElement("p");

    posts.setAttribute("class", "posts");
    votedivs.setAttribute("class", "vote");
    postdivs.setAttribute("class", "text");
    links.setAttribute("href", ourData.posts[i].url);
    upvote.setAttribute("class", "button upvote");
    upvote.setAttribute("id", ourData.posts[i].id);
    upvote.setAttribute("value", "up");
    linkdivs.setAttribute("class", "linkdivs");
    downvote.setAttribute("class", "button downvote");
    downvote.setAttribute("id", ourData.posts[i].id);
    downvote.setAttribute("value", "down");
    score.setAttribute("id", ourData.posts[i].id);

    score.innerText = ourData.posts[i].score;
    modify.innerText = "Modify";
    remove.innerText = " Remove";
    links.innerText = ourData.posts[i].url;
    title.innerText = ourData.posts[i].title;

    postContainer.appendChild(posts);
    posts.appendChild(votedivs);
    posts.appendChild(postdivs);
    votedivs.appendChild(upvote);
    votedivs.appendChild(score);
    votedivs.appendChild(downvote);
    postdivs.appendChild(title);
    postdivs.appendChild(links);
    postdivs.appendChild(time);
    linkdivs.appendChild(modify);
    linkdivs.appendChild(remove);
    postdivs.appendChild(linkdivs);
    time.innerHTML = `${when(ourData.posts[i].timestamp)}`;
  }
};
ourRequest.send();
