const pgp = require(process.env.DATABASE_URL || 'pg-promise')(),
      db = pgp('postgres://ccheng@localhost:5432/spotify');
module.exports = db;
