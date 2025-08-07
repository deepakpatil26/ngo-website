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

export const updateVolunteer = async (req: Request, res: Response) => {
  try {
    const updated = await Volunteer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: 'Volunteer not found.' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating application.' });
  }
};

export const deleteVolunteer = async (req: Request, res: Response) => {
  try {
    const deleted = await Volunteer.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Volunteer not found.' });
    }

    res.status(200).json({ message: 'Application deleted.' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting application.' });
  }
};
