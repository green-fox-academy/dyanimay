// ret the id somehow from the url
const id = window.location.pathname.split('/')[2];
console.log({ id });
// send the request with that id to the backend
console.log(`/api/orders/${id}`);
fetch(`/api/orders/${id}`).then((response) => {
  return response.json();
}).then((responseBody) => {
  document.querySelector('.order').innerHTML = `
    <p>${responseBody.address}</p>
    <p>${responseBody.name}</p>
    <p>${responseBody.pizza}</p>
  `;

  // document.querySelector('.order').innerHTML = '<p>' + responseBody.address + '</p>';

  console.log({responseBody});
  console.log(responseBody.address);

}).catch((error) => {
  console.log(error);
})

const xhr = new XMLHttpRequest();
xhr.open('GET', `/api/orders/${id}`);
xhr.onload = () => {
  console.log(xhr.responseText);
}
xhr.send(null);

// display the information