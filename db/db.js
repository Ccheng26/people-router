const pgp = require('pg-promise')(),
      db = pgp(process.env.DATABASE_URL || 'postgres://ccheng@localhost:5432/spotify');
module.exports = db;
