/*jshint esversion: 6 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

let port = 5000;
let app = express();

app.use(bodyParser.json());
app.use(cors());
// console.log(port);
app.route('/api/search')
  .get((req, res, next) => {
  let searchTerm = req.query.term;
  res.json(`the search term ${searchTerm} is invalid`);
})
  .post((req, res, next) => {
    console.log(req.body.term);
    let searchTerm = req.body.term;
    res.json(`the search term ${searchTerm} is invalid`);
  });

app.listen(port, () => console.log('listening on 5000'));
