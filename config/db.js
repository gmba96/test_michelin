//const {userSchema} = require('../database/userSchema');
const { database, host, port, max } = require('pg/lib/defaults');

const {user, password} = require('pg/lib/defaults');

const pgsqlPool = require('pg').Pool;

const pool = new pgsqlPool({
    user: 'postgres',
    password: 'NuutsugPostgre',
    database: 'library',
    host: 'localhost',
    port: 5432,
    max: 20
});

// Fonction pour vérifier la connexion
(async () => {
    try {
      const client = await pool.connect();
      console.log('Connexion à la base de données réussie.');
      client.release();
    } catch (err) {
      console.error('Erreur de connexion à la base de données:', err);
    }
  })();

module.exports = pool;