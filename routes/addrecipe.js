var express = require('express');
var router = express.Router();

var fs = require('fs');

/* add recipe to recipes.json */
router.post('/', function(req, res, next) {
  //response msg
  let msg = {txt: "dummy txt"};
  // read all recipes
  let recipes = JSON.parse(fs.readFileSync('public/json/recipes.json', 'utf8'));
  // set new recipe id
  let newId = recipes.length + 1;
  // parse the new recipe
  let newRecipe = req.body;
  // change the id of the new recipe
  newRecipe.id = newId;
  // push newRecipe into recipes
  recipes.push(newRecipe);
  //convert recipe back to json
  let recipesJson = JSON.stringify(recipes, null, 2);
  // rewrite recipes
  fs.writeFile('public/json/recipes.json', recipesJson, 'utf8', function(err){
    if(err) { msg.txt= "error" } else { msg.txt= "success" };
    res.json(msg);
  });
});

module.exports = router;
