import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
const NAMESPACE = 'POST Controller';

const getTabs = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, `Function get Tabs called!`);
	let doc: string[] = JSON.parse(req.body as string);
	// let doc = ['test1', 'test2'];
	let sections: any[] = [];

	doc.forEach((part) => {
		if (part !== 'home') {
			sections.push({
				name: `${part}`,
				url: `#${part}`
			});
		} else {
			sections.push({
				name: `${part}`,
				url: `/portofolio/`
			});
		}
	});
	return res.send(sections);
};

export default { getTabs };
