import express from 'express';
import postController from '../controllers/post';

const router = express.Router();

router.post('/tabs', express.json(), postController.getTabs);

export = router;
