import { Router } from 'express';

import WorldCupController from './controllers/worldCupController';

const worldCupController = new WorldCupController();

const router = Router();

router.get('/', worldCupController.getWorldCups);

export default router;