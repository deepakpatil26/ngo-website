// src/components/AdminView.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Volunteer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  experience: string;
  motivation: string;
  createdAt: string;
}

const AdminView: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/applications')
      .then((res) => setVolunteers(res.data))
      .catch(() => setError('Failed to fetch applications'));
  }, []);

  return (
    <div className='pt-16 min-h-screen bg-gray-100 px-6 py-10'>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>
        Volunteer Applications
      </h1>

      {error && <p className='text-red-600 text-center mb-4'>{error}</p>}

      <div className='grid gap-6'>
        {volunteers.map((v) => (
          <div
            key={v._id}
            className='bg-white shadow-md rounded-lg p-6'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='text-xl font-semibold'>{v.name}</h2>
              <p className='text-sm text-gray-500'>
                {new Date(v.createdAt).toLocaleString()}
              </p>
            </div>
            <p>
              <strong>Email:</strong> {v.email}
            </p>
            <p>
              <strong>Phone:</strong> {v.phone}
            </p>
            <p>
              <strong>Availability:</strong> {v.availability}
            </p>
            <p>
              <strong>Skills:</strong> {v.skills}
            </p>
            <p>
              <strong>Experience:</strong> {v.experience || '—'}
            </p>
            <p>
              <strong>Motivation:</strong> {v.motivation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;
