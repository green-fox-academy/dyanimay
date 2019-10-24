const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  if (Object.entries(req.query).length === 0){ //it checks whether you wrote something or not, if not then it writes Guest
    name = 'Guest';
  } else {
    name = req.query.name
  }
  res.render('home', {
    title: `Welcome back ${name}!`, //I am using the trick here BUT you have to use the back comma `
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});