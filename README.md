# People Router

### Good Day Client! 

Thank you for using our service, to save time on entering routes, I've constructed a site for you to access with straight forward instructions for:
+  creating users and their favorite cities
+  reading the entries
+  updating their favorite cities
+  deleting users 

This can all be accessed [here](http://ccheng-person-finder.herokuapp.com). If you would rather not use the web application, proceed to the Client Instructions section.

## Client Instructions

An alternative method of accessing this information is by entering the routes listed below in [Postman](https://www.getpostman.com/). I have configured a separate API route to return JSON data for you. The web application and the requests made within Postman will be affecting the same data set, they're different ways of viewing information.

Here are some instructions for the CRUD capabilities mentioned earlier:
+ A **GET** request to **/people** will return all values in the database.
  + Type or paste **ccheng-person-finder.herokuapp.com/people** in the *'Enter request URL'* field and hit **Send**.
  + You will see an empty array if the database is empty.

![Get](http://i.imgur.com/8Ct8jnV.png)
+ A **POST** request to **/people** will add a value to a user in the database.
  + Type or paste **ccheng-person-finder.herokuapp.com/people** in the *'Enter request URL'* field.
  + Select **POST** in the action list, then the **Body** tab, select the radio option *'x-www-form-urlencoded'* and enter the data you would like to insert into the table. The table structure has the following values: *id, name, and favoriteCity*. The id is automatically generated when we enter a value.
  + We can add the following attributes: <br>
    *name : “Sean”, favoriteCity : “New York”* <br>
    by setting up the key value pairs. 
  + **Send** the request and you should see this below. The **POST** route for **/people** has been configured to retrieve objects created in the previous request.
```json
[
  {
    "id": 1,
    "name": "Sean",
    "favoritecity": "New York"
  }
]
```
![Post](http://i.imgur.com/7svzGJj.png)

+ A **PUT** request can be made to **/people/:id** to modify the city attribute.
  + Type or paste **ccheng-person-finder.herokuapp.com/people/1** in the *'Enter request URL'* field.
  + Change the action to **PUT**
    + or leave the action on **POST**, type or paste **ccheng-person-finder.herokuapp.com/people/1?_method=PUT**, next steps are the same.
  + Since we are only changing one value, uncheck the box next to name.
  + Change the value of *favoriteCity* by typing a new value in the value field, we can change it to *"Brooklyn"*. 
  + **Send** the request.
  + The message "**City Updated"** will appear.

![Put](http://i.imgur.com/hiVntPi.png)

+ To view the updated request, make a **GET** request to **ccheng-person-finder.herokuapp.com/people/1**
  + The *favoritecity* will be updated to *"Brooklyn"*.
+ To remove a user a **DELETE** request can be made to **/people/:id**.
  + Type or paste **ccheng-person-finder.herokuapp.com/people/1** in the *'Enter request URL'* field.
  + Change the action to **DELETE**
    + or leave the action on **POST**, type or paste **ccheng-person-finder.herokuapp.com/people/1?_method=DELETE**, next steps are the same.
  + **Send** the request and the message **'User Deleted'** will appear.
+ If you make another **GET** request to **ccheng-person-finder.herokuapp.com/people**.
  + You'll see an empty array, if you've removed all the users.

**Note:** As stated routes can still be accessed above by hitting the **ccheng-person-finder.herokuapp.com/** url, it will return HTML as opposed to JSON data.

## Additional Notes

### Directory structure:
```
spotify-fellowship/
├── controllers/
│   ├── config.js
│   ├── people.js
│   ├── routes.js
├── db/
│   ├── db.js
│   ├── user_schema.sql
├── public/
│   ├── style.css
├── views/
│   ├── error.html
│   ├── index.html
│   ├── show.html
├── app.js
├── package.json
├── Procfile
```
### Technologies Used:
+ HTML: page rendering
+ CSS: page formatting/styling
+ Node
  + Express: route and server configuration
  + Mustache: page templating
  + Pg-promise: database item retrieval
  + Method-override: for PUT and DELETE requests
  + Body-parser: using body.req to retrieve form data
+ GitHub: version control
+ Heroku: deployment with server hosting

### Installation Instructions (OSX):
Have [PostgreSQL](https://www.postgresql.org/) (default on OS X Server version 10.7 and later) and [Node](https://nodejs.org/en/) installed

#### In Terminal
 ```bash
# Clone this repository with SSH
git clone git@github.com:Ccheng26/people-router.git
# Go into the repository
cd people-router
# Install dependencies
npm install
# Create database (see setup for additional instructions)
createdb databaseName
# Seed database schema
psql -d databaseName -f db/user_schema.sql
```
#### In db directory, revise db.js
```javascript
// Change the computerUsername and databaseName
const pgp = require('pg-promise')(),
      db = pgp(process.env.DATABASE_URL || 'postgres://computerUsername@localhost:5432/databaseName');
```
#### Start the App in Terminal
```bash
node app
```
