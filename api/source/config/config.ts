import dotenv from 'dotenv';
import path from 'path';

// const __dirname = 'C:/Users/evilg/Desktop/portofolio/api/';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DB || 'test';
const MYSQL_USER = process.env.MYSQL_USER || 'admin';
const MYSQL_PASS = process.env.MYSQL_PASSWORD || 'pass';

const MYSQL = {
	host: MYSQL_HOST,
	database: MYSQL_DATABASE,
	user: MYSQL_USER,
	password: MYSQL_PASS
};

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT
};

const config = {
	mysql: MYSQL,
	server: SERVER
};

export default config;
