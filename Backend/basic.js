// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// // REST API (Representational State Transfer Application Programming Interface) 
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

// Synchronous methods
// fs.readFileSync()
console.log(fs.readFileSync('example.txt', 'utf8'));

// fs.writeFileSync()
// try {
//   fs.writeFileSync('example.txt', 'New content!');
// } catch (err) {
//   console.error(err);
// }

// // fs.unlinkSync()
// try {
//   fs.unlinkSync('example.txt');
// } catch (err) {
//   console.error(err);
// }

// // fs.mkdirSync()
// try {
//   fs.mkdirSync('example');
// } catch (err) {
//   console.error(err);
// }

// // fs.rmdirSync()
// try {
//   fs.rmdirSync('example');
// } catch (err) {
//   console.error(err);
// }

// // Asynchronous methods
// // fs.readFile()
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // fs.writeFile()
// fs.writeFile('example.txt', 'New content!', (err) => {
//   if (err) throw err;
//   console.log('File written successfully!');
// });

// // fs.unlink()
// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// // fs.mkdir()
// fs.mkdir('example', (err) => {
//   if (err) throw err;
//   console.log('Directory created!');
// });

// // fs.rmdir()
// fs.rmdir('example', (err) => {
//   if (err) throw err;
//   console.log('Directory deleted!');
// });
