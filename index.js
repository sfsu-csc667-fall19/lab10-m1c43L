const express = require('express');
const app = express();

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++;
  const string = `Hello World! You have visited this app ${visitCount} times!`;
  console.log(string);
  res.send(string);
});

app.listen(3000);