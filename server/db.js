const Pool = require('pg').Pool;
require('dotenv').config();

const header = {
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_DB,
};

const pool = new Pool(header);

module.exports = pool;
