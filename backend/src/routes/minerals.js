import { Router } from 'express';
import { validateRequest } from '../middleware/validateRequest.js';
import { mineralSchemas } from '../schemas/mineral.js';
import * as mineralController from '../controllers/mineralController.js';

export const router = Router();

router.get('/', mineralController.getAllMinerals);
router.get('/:id', mineralController.getMineralById);
router.get('/category/:category', mineralController.getMineralsByCategory);
router.get('/:id/locations', mineralController.getMineralLocations);

router.post('/',
  validateRequest(mineralSchemas.createMineral),
  mineralController.createMineral
);

router.put('/:id',
  validateRequest(mineralSchemas.updateMineral),
  mineralController.updateMineral
);

router.delete('/:id', mineralController.deleteMineral);
