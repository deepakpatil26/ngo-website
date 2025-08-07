// backend/src/routes/volunteerRoutes.ts

import express from 'express';
import {
  createVolunteer,
  getAllVolunteers,
  updateVolunteer,
  deleteVolunteer,
} from '../controllers/volunteerController';

const router = express.Router();

router.post('/', createVolunteer); // POST /api/applications
router.get('/', getAllVolunteers); // GET /api/applications
router.put('/:id', updateVolunteer); // PUT /api/applications/:id
router.delete('/:id', deleteVolunteer); // DELETE /api/applications/:id

export default router;
