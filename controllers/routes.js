const express = require ('express'),
      router = express.Router(),
      db = require('../db/db');

// get route for /
// router.get("/", function(req,res){
//   console.log("render index file");
//   res.render('index');
// })

// get route for people, will render the index file in people folder in views
router.get("/people",function(req,res){
  // pulls information from database, in this case, getting all the db info from the table people
  db.any("SELECT * FROM people")
  .then(function(data){
    // insert information into an object, so we can render it with mustache
    var peopleInfo= {'people': data};
    res.render('index', peopleInfo);
  })
})

// post route for people, will add a user
router.post("/people", function(req,res){
  // grabs form data from index.html in views/people
  people = req.body;
  // inserts the form data into database
  var insertItem = db.none('INSERT INTO people (name, favoriteCity) VALUES ($1, $2)',
    [people.name, people.favoriteCity])
  // after data is inserted, hit the get route
  insertItem.then(function(){
    res.redirect('/people')
  })
})

// get route for individual person, id will bring user to show page for individual person's info
router.get("/people/:id",function(req,res){
  // takes the person's id as a parameter
  id = req.params.id;
  // pulls all information from database, where person id matches url
  db.one("SELECT * FROM people WHERE id = $1",
    [req.params.id]).then(function(data){
      var personId = {'people':data};
      res.render('show', personId)
    }
  )
})

/* Note bad practice to do a PUT request without an id
  technically you can do the put request, but not remotely
  since I have the put request form within the individual page where it can pull the id,
  however you will not be able to do the update your entries without using the page navigation;
  There's a better way listed below

router.put("/people", function(req,res){
  person = req.body;
  db.none("UPDATE people SET favoriteCity = $1 WHERE id =$2",
    [person.favoriteCity, id]).then(
      function(){
        res.redirect('/people/' + id
      )}
    )
})
*/

// updates selected person id's favorite city
router.put("/people/:id", function(req,res){
  person = req.body;
  id = req.params.id;
  db.none("UPDATE people SET favoriteCity = $1 WHERE id = $2",
    [person.favoriteCity, id]).then(
      // nesting this in a function so you won't need to hit the reload button to see results
      function(){
        res.redirect('/people/' + id)
      }
    )
})

// deletes a person
router.delete('/people/:id',function(req,res){
  id = req.params.id
  db.none("DELETE FROM people WHERE id= $1", [id]
  ).catch(function(){
      res.send('Sorry no user here')
  }).then(function(){
      res.redirect('/people')
  })
})



module.exports = router;
