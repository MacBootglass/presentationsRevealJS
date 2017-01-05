var express = require('express');
var app = express();
var port = 3000;

app.use("/opticalflow", express.static('public/presentations/opticalflow'));
app.use("/ressources", express.static('public/ressources'));
app.use("/revealjs", express.static('node_modules/reveal.js'));
app.use("/jquery", express.static('node_modules/jquery'));

app.get("/", (req, res) => {
  res.send("Index");
});

app.listen(port, () => {
  console.log('Server listening on port ' + port + '!')
});
