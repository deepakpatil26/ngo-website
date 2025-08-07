// backend/src/routes/volunteerRoutes.ts

import express from 'express';
import {
  createVolunteer,
  getAllVolunteers,
} from '../controllers/volunteerController';

const router = express.Router();

router.post('/', createVolunteer); // POST /api/applications
router.get('/', getAllVolunteers); // GET /api/applications

export default router;
