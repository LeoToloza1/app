const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] ||8080 ;
// const port = parseInt(27017) ;
console.log(port);
app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  const msj = "Hola desde el servidor";
  res.status(200).json(msj);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})