var express = require('express');
var app = express();
var opener = require('opener');
var port = 3000;

// app.use('/presentations', express.static('public/presentations/'));
// app.use('/ressources', express.static('public/ressources'));
app.use('/ressources/revealjs', express.static('node_modules/reveal.js'));
app.use('/ressources/jquery', express.static('node_modules/jquery'));
app.use('/', express.static('public'));

// app.get('/', (req, res) => {
//   res.send('\
//
//   ');
// });

app.listen(port, () => {
  console.log('Server listening on port ' + port + '!')
});

opener('http://localhost:' + port + '/');
