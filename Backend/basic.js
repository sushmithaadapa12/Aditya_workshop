const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// REST API (Representational State Transfer Application Programming Interface) 
const fs = require('fs');

// Writing to a file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File created and written to successfully!');

  // Reading the file we just created
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



