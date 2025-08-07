// backend/src/models/Volunteer.ts

import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    skills: { type: String, required: true },
    availability: { type: String, required: true },
    experience: { type: String },
    motivation: { type: String },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
export default Volunteer;
