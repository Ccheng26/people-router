DROP TABLE IF EXISTS people;
CREATE TABLE people(
  id SERIAL PRIMARY KEY,
  name VARCHAR(75),
  favoriteCity VARCHAR(200)
);
-- for the purposes of the assignment, this won't need an extra seed file, so insert default user here
INSERT INTO people
  (name, favoriteCity)
  VALUES
  ('Sean', 'New York');
