const express = require ('express'),
      router = express.Router();

// get route for /
router.get("/", function(req,res){
  console.log("general leads to index file");
  res.render('index');
})

router.get("/people",function(req,res){
  console.log("this route leads to people");
  res.render('people/index');
})

module.exports = router;
