const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const address = document.querySelector('#address').value;
  //const pizza = document.querySelector('.pizza:checked').value;
  const agreed = document.querySelector('#agreed').checked;
  const pizza2 = document.querySelector('input[name="pizza"]:checked').value;

  console.log({name, address, agreed, pizza2});
});