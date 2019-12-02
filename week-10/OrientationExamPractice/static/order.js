//console.log('hi');

//get the order id somehow
const id = (window.location.pathname.split('/')[2]);
console.log({id});

//send the request with that id to the backend

fetch(`/api/orders/${id}`)
  .then((response) => response.json())
  .then((responseBody) => {
  document.querySelector('.order').innerHTML = `
  <p>${responseBody.name}</p>
  <p>${responseBody.address}</p>
  <p>${responseBody.pizza}</p>
  `
  console.log((responseBody));
  console.log(responseBody.address);
}).catch((error) => {
  console.log(error)
});

const xhr = new XMLHttpRequest;
xhr.open('GET', `/api/orders/${id}`);
xhr.onload = () => {
  console.log(xhr.responseText);
}
xhr.send(null);