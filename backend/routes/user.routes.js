import express from 'express';
import { getUserFromSidebar } from '../controller/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/',protectRoute,getUserFromSidebar);

export default router;