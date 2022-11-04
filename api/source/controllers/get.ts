import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import { Connect, Query } from '../config/mysql';

const NAMESPACE = 'GET Controller';

const getSkills = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, 'Getting Skills');

	let query =
		'SELECT areas.id as area_id,areas.name as area_name, skills.name as skill_name FROM skills INNER JOIN areas WHERE areas.id = skills.area_id;';

	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((results) => {
					return res.send(results);
				})
				.catch((err) => {
					logging.error(NAMESPACE, err.message, err);

					return res.status(500).json({
						message: err.message,
						err
					});
				})
				.finally(() => {
					connection.end();
				});
		})
		.catch((err) => {
			logging.error(NAMESPACE, err.message, err);

			return res.status(500).json({
				message: err.message,
				err
			});
		});
};

const getLangs = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, 'Getting Languages');

	let query = 'SELECT * FROM langs';

	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((results) => {
					return res.send(results);
				})
				.catch((err) => {
					logging.error(NAMESPACE, err.message, err);

					return res.status(500).json({
						message: err.message,
						err
					});
				})
				.finally(() => {
					connection.end();
				});
		})
		.catch((err) => {
			logging.error(NAMESPACE, err.message, err);

			return res.status(500).json({
				message: err.message,
				err
			});
		});
};

export default { getSkills, getLangs };
