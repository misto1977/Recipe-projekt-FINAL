var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET ingredients by first n letters */
router.get('/:str', function(req, res, next) {
  let ingredients = JSON.parse(fs.readFileSync('public/json/livsmedelsdata.json', 'utf8'));
  let filteredIngs = ingredients.filter( (ing) => ing.Namn.toLowerCase().startsWith(req.params.str) );
  console.log(req.params.str);
  res.json(filteredIngs);
});

module.exports = router;
