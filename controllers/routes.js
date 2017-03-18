const express = require ('express'),
      router = express.Router(),
      db = require('../db/db');

// get route for /
router.get("/", function(req,res){
  console.log("general leads to index file");
  res.render('index');
})

// get route for people, will render the index file in people folder in views
router.get("/people",function(req,res){
  db.any("SELECT * FROM people")
  .then(function(data){
    var peopleInfo= {'people': data};
    console.log(data)
    res.render('people/index', peopleInfo);
  })
})

router.get("/people/:id",function(req,res){
  id = req.params.id;
  db.one("SELECT * FROM people WHERE id=$1",
    [req.params.id]).then(function(data){
      var personId = {'people':data};
      res.render('people/show', personId)
    }
  )
})

router.post("/people", function(req,res){
  people = req.body;
  db.none('INSERT INTO people (name, favoriteCity) VALUES ($1, $2)',
    [people.name, people.favoriteCity])
  res.render('people/index', peopleInfo)
})

module.exports = router;
