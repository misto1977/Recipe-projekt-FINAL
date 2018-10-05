var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET recipes listing. */
router.get('/', function(req, res, next) {
  let recipes = JSON.parse(fs.readFileSync('public/json/recipes.json', 'utf8'));
  res.json(recipes);
});

module.exports = router;
