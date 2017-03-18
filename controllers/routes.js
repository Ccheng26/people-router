const express = require ('express'),
      router = express.Router();

// get route for /
router.get("/", function(req,res){
  console.log("general leads to index file")
  res.render('index')
})

//
module.exports = router;
