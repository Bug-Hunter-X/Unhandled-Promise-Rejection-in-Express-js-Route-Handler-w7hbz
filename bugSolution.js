const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {
  try {
    await someAsyncOperation();
    res.send('Hello');
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation(){
  const success = Math.random() < 0.5;
if (!success) {
    throw new Error('Asynchronous operation failed');
  }
}