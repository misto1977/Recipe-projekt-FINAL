var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET recipe by id. */
router.get('/:id', function(req, res, next) {
  let recipes = JSON.parse(fs.readFileSync('public/json/recipes.json', 'utf8'));
  let recipe = recipes.find( (rcp) => rcp.id == req.params.id);
  console.log(recipe);
  res.json(recipe);
});

module.exports = router;
