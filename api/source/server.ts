import http from 'http';
import * as ws from 'ws';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import routes from './routes/post';
import getroutes from './routes/get';

const NAMESPACE = 'Server';
const router = express();

/** Logging */
router.use((req, res, next) => {
	logging.info(
		NAMESPACE,
		`METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
	);

	res.on('finish', () => {
		logging.info(
			NAMESPACE,
			`METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
		);
	});

	next();
});
/** Parsing */
router.use(require('body-parser').text({ inflate: false }));

/** Rules */
router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	if (req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
		return res.status(200).json({});
	}

	next();
});

/** Endpoints */
router.use('/post', routes);
router.use('/get', getroutes);
/**  Errors */
router.use((req, res, next) => {
	const error = new Error('not found');

	return res.status(404).json({
		message: error.message
	});
});

/** Create the server */
const httpServer = http.createServer(router);
const wss = new ws.Server({ server: httpServer });
httpServer.listen(config.server.port, () =>
	logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`)
);
