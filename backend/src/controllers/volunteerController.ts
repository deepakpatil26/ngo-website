// backend/src/controllers/volunteerController.ts

import { Request, Response } from 'express';
import Volunteer from '../models/Volunteer';

export const createVolunteer = async (req: Request, res: Response) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit application.' });
  }
};

export const getAllVolunteers = async (_req: Request, res: Response) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applicants.' });
  }
};
