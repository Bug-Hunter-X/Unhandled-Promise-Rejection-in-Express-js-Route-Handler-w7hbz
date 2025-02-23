const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(error => {
    // Error handling missing here.  The server will crash!
    console.error(error);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation(){
  // Simulate an asynchronous operation that may fail
  const success = Math.random() < 0.5; // 50% chance of failure
if (!success) {
    throw new Error('Asynchronous operation failed');
  }
}