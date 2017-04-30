var express = require('express');
var app = express();
var opener = require('opener');
var port = 3000;

app.use('/opticalflow', express.static('public/presentations/opticalflow'));
app.use('/myOwnPortfolio', express.static('public/presentations/myOwnPortfolio'));
app.use('/ressources', express.static('public/ressources'));
app.use('/revealjs', express.static('node_modules/reveal.js'));
app.use('/jquery', express.static('node_modules/jquery'));

app.get('/', (req, res) => {
  res.send('\
    <h1>Présentations</h1>\
    <ul>\
      <li><a href="/opticalflow">opticalflow</a></li>\
      <li><a href="/myOwnPortfolio">myOwnPortfolio</a></li>\
    </ul>\
  ');
});

app.listen(port, () => {
  console.log('Server listening on port ' + port + '!')
});

opener('http://localhost:' + port + '/');
