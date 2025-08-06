import React, { useState } from 'react';
import { ArrowRight, Globe, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const HomePage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<
    null | 'education' | 'healthcare' | 'environment'
  >(null);

  const modalContent = {
    education: {
      title: 'Education',
      content:
        'We work to provide quality education to underprivileged children by building schools, training teachers, and offering scholarships.',
      color: 'text-blue-600',
    },
    healthcare: {
      title: 'Healthcare',
      content:
        'Our healthcare initiatives focus on building clinics, organizing medical camps, and promoting community wellness.',
      color: 'text-green-600',
    },
    environment: {
      title: 'Environment',
      content:
        'We support reforestation, plastic waste reduction, and environmental education to promote sustainable living.',
      color: 'text-purple-600',
    },
  };

  return (
    <>
      <div className='pt-16'>
        {/* HERO SECTION */}
        <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
                Making a Difference,
                <br />
                <span className='text-yellow-300'>One Life at a Time</span>
              </h1>
              <p className='text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed'>
                Join HopeForward in creating positive change across communities.
                Together, we can build a better tomorrow for everyone.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link to='/volunteer'>
                  <button className='bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2'>
                    Become a Volunteer <ArrowRight className='h-5 w-5' />
                  </button>
                </Link>
                <Link to='/about'>
                  <button className='border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors'>
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {[
                ['10K+', 'Lives Impacted'],
                ['500+', 'Active Volunteers'],
                ['25+', 'Countries'],
                ['15', 'Years Experience'],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className='text-center'>
                  <div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-2'>
                    {stat}
                  </div>
                  <div className='text-gray-600 font-medium'>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR CAUSES */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
                Our Causes
              </h2>
              <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                We focus on creating sustainable impact across multiple areas of
                human development
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {/* Education */}
              <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='bg-blue-100 p-8'>
                  <Users className='h-12 w-12 text-blue-600 mb-4' />
                  <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                    Education
                  </h3>
                  <p className='text-gray-600'>
                    Providing quality education and learning opportunities to
                    underserved communities
                  </p>
                </div>
                <div className='p-6'>
                  <button
                    onClick={() => setActiveModal('education')}
                    className='text-blue-600 font-semibold hover:underline'>
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Healthcare */}
              <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='bg-green-100 p-8'>
                  <Heart className='h-12 w-12 text-green-600 mb-4' />
                  <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                    Healthcare
                  </h3>
                  <p className='text-gray-600'>
                    Ensuring access to basic healthcare and wellness programs
                    for all
                  </p>
                </div>
                <div className='p-6'>
                  <button
                    onClick={() => setActiveModal('healthcare')}
                    className='text-green-600 font-semibold hover:underline'>
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Environment */}
              <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='bg-purple-100 p-8'>
                  <Globe className='h-12 w-12 text-purple-600 mb-4' />
                  <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                    Environment
                  </h3>
                  <p className='text-gray-600'>
                    Protecting our planet through sustainable practices and
                    conservation efforts
                  </p>
                </div>
                <div className='p-6'>
                  <button
                    onClick={() => setActiveModal('environment')}
                    className='text-purple-600 font-semibold hover:underline'>
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className='bg-gray-800 text-white py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Ready to Make a Difference?
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto'>
              Your skills, passion, and time can create meaningful change in
              communities around the world.
            </p>
            <Link to='/volunteer'>
              <button className='bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors'>
                Join Our Mission Today
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* MODAL */}
      {activeModal && (
        <Modal
          isOpen={true}
          title={modalContent[activeModal].title}
          content={modalContent[activeModal].content}
          color={modalContent[activeModal].color}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
};

export default HomePage;
