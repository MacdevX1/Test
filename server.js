const app = require('express')();
import { sum, subtract, multiply, divide } from './app.js';
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sum/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.send(sum(a, b));
});

app.get('/subtract/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.send(subtract(a, b));
});

app.get('/multiply/:a/:b', (req, res) => {          
  const { a, b } = req.params;
  res.send(multiply(a, b));
});

app.get('/divide/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.send(divide(a, b));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});     
