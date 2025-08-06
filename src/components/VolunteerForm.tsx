// src/components/VolunteerForm.tsx
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    experience: '',
    motivation: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);

    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: '',
      experience: '',
      motivation: '',
    });
  };

  return (
    <div className='pt-16 min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>
            Become a Volunteer
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Join our community of changemakers and help us create positive
            impact around the world
          </p>
        </div>

        {isFormSubmitted && (
          <div className='mb-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3'>
            <CheckCircle className='h-6 w-6 text-green-600' />
            <span className='text-green-800 font-medium'>
              Thank you! Your application has been submitted successfully.
            </span>
          </div>
        )}

        <div className='bg-white rounded-xl shadow-lg p-8'>
          <div className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Full Name *
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Your full name'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email Address *
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='your.email@example.com'
                />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='+1 (555) 123-4567'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Availability *
                </label>
                <select
                  name='availability'
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                  <option value=''>Select availability</option>
                  <option value='weekends'>Weekends only</option>
                  <option value='weekdays'>Weekdays only</option>
                  <option value='evenings'>Evenings</option>
                  <option value='flexible'>Flexible schedule</option>
                  <option value='full-time'>Full-time commitment</option>
                </select>
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Skills & Expertise *
              </label>
              <textarea
                name='skills'
                value={formData.skills}
                onChange={handleInputChange}
                required
                rows={3}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Tell us about your skills, professional background, or areas of expertise...'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Previous Volunteer Experience
              </label>
              <textarea
                name='experience'
                value={formData.experience}
                onChange={handleInputChange}
                rows={3}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Share any previous volunteer work or community involvement...'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Why do you want to volunteer with us? *
              </label>
              <textarea
                name='motivation'
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder="Tell us what motivates you to volunteer and how you'd like to contribute to our mission..."
              />
            </div>

            <div className='flex justify-end'>
              <button
                type='button'
                onClick={handleFormSubmit}
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'>
                Submit Application
              </button>
            </div>
          </div>
        </div>

        {/* What happens next section */}
        <div className='mt-12 bg-blue-50 rounded-xl p-8'>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>
            What happens next?
          </h3>
          <div className='grid md:grid-cols-3 gap-6'>
            {[
              [
                'Application Review',
                'We’ll review your application within 3–5 business days.',
              ],
              [
                'Interview & Orientation',
                'Brief interview followed by orientation session.',
              ],
              [
                'Start Volunteering',
                'Begin making a difference in your chosen area.',
              ],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className='text-center'>
                <div className='bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-blue-600 font-bold text-lg'>
                    {idx + 1}
                  </span>
                </div>
                <h4 className='font-semibold text-gray-800 mb-2'>{title}</h4>
                <p className='text-gray-600 text-sm'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
