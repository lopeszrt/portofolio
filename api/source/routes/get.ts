import express from 'express';
import getController from '../controllers/get';

const router = express.Router();

router.get('/skills', express.json(), getController.getSkills);
router.get('/langs', express.json(), getController.getLangs);

export = router;
