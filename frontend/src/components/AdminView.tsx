/* eslint-disable no-restricted-globals */
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
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<Volunteer>>({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE}/api/applications`)
      .then((res) => setVolunteers(res.data))
      .catch(() => setError('Failed to fetch applications'));
  }, []);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE}/api/applications`)
      .then((res) => setVolunteers(res.data))
      .catch(() => setError('Failed to fetch applications'));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this application?')) {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE}/api/applications/${id}`
      );
      fetchData();
    }
  };

  const handleEdit = (v: Volunteer) => {
    setEditId(v._id);
    setForm(v);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put(
      `${process.env.REACT_APP_API_BASE}/api/applications/${editId}`,
      form
    );
    setEditId(null);
    fetchData();
  };

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
            {editId === v._id ? (
              <>
                <input
                  className='border p-2 w-full mb-2'
                  name='name'
                  value={form.name || ''}
                  onChange={handleInputChange}
                />
                <input
                  className='border p-2 w-full mb-2'
                  name='email'
                  value={form.email || ''}
                  onChange={handleInputChange}
                />
                <textarea
                  className='border p-2 w-full mb-2'
                  name='skills'
                  value={form.skills || ''}
                  onChange={handleInputChange}
                />
                {/* Add other fields similarly */}
                <div className='flex gap-4'>
                  <button
                    onClick={handleSave}
                    className='bg-green-600 text-white px-4 py-2 rounded'>
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className='bg-gray-500 text-white px-4 py-2 rounded'>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
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
                  <strong>Skills:</strong> {v.skills}
                </p>
                <p>
                  <strong>Availability:</strong> {v.availability}
                </p>
                <p>
                  <strong>Motivation:</strong> {v.motivation}
                </p>

                <div className='mt-4 flex gap-4'>
                  <button
                    onClick={() => handleEdit(v)}
                    className='bg-blue-600 text-white px-4 py-2 rounded'>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(v._id)}
                    className='bg-red-600 text-white px-4 py-2 rounded'>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;
