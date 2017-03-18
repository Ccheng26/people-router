const express = require ('express'),
      router = express.Router();

// get route for /
router.get("/", function(req,res){
  console.log("general leads to index file");
  res.render('index');
})

// get route for people, will render the index file in people folder in views
router.get("/people",function(req,res){
  console.log("this route leads to people");
  res.render('people/index');
})

router.post("/people", function(req,res){
  console.log("post to peeps")
})

module.exports = router;
