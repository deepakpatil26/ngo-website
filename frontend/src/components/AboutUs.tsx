// src/components/AboutUs.tsx
import React from 'react';
import { Globe, Heart, Mail, MapPin, Phone, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className='pt-16'>
      {/* Copy full AboutUs JSX from your original code and paste here */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-800 mb-6'>
            About HopeForward
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            For over 15 years, HopeForward has been dedicated to creating
            sustainable positive change in communities worldwide through
            education, healthcare, and environmental initiatives.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-20'>
          <div className='text-center'>
            <div className='bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6'>
              <Heart className='h-10 w-10 text-blue-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Our Mission
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              To empower communities by providing access to education,
              healthcare, and sustainable development opportunities that create
              lasting positive change.
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6'>
              <Globe className='h-10 w-10 text-green-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Our Vision
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              A world where every individual has equal opportunities to thrive,
              regardless of their background or circumstances, living in harmony
              with our planet.
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6'>
              <Users className='h-10 w-10 text-purple-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Our Values
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Integrity, compassion, sustainability, and inclusivity guide
              everything we do. We believe in transparent, community-led
              solutions.
            </p>
          </div>
        </div>

        <div className='bg-gray-50 rounded-2xl p-8 mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>
                Our Story
              </h2>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                HopeForward began in 2009 when a group of passionate individuals
                came together with a shared vision of creating meaningful change
                in underserved communities. What started as a small local
                initiative has grown into a global movement.
              </p>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                Over the years, we've learned that sustainable change happens
                when communities are empowered to lead their own development.
                That's why we focus on building local capacity and creating
                programs that can continue long after our direct involvement.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                Today, we're proud to work alongside 500+ volunteers across 25
                countries, having impacted over 10,000 lives through our various
                programs and initiatives.
              </p>
            </div>
            <div className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8 text-white'>
              <h3 className='text-2xl font-bold mb-6'>Key Achievements</h3>
              <div className='space-y-4'>
                <div>
                  <div className='text-3xl font-bold text-yellow-300'>150+</div>
                  <div className='text-blue-100'>Schools Built & Supported</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-yellow-300'>50+</div>
                  <div className='text-blue-100'>Healthcare Centers</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-yellow-300'>1M+</div>
                  <div className='text-blue-100'>Trees Planted</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-yellow-300'>
                    2,500+
                  </div>
                  <div className='text-blue-100'>Scholarships Provided</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>
            Leadership Team
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Meet the passionate individuals leading our mission to create
            positive change
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-20'>
          <div className='text-center'>
            <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center'>
              <Users className='h-16 w-16 text-gray-500' />
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              Sarah Johnson
            </h3>
            <p className='text-blue-600 font-medium mb-2'>Executive Director</p>
            <p className='text-gray-600 text-sm'>
              15+ years in international development and community empowerment
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center'>
              <Users className='h-16 w-16 text-gray-500' />
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              Michael Chen
            </h3>
            <p className='text-blue-600 font-medium mb-2'>Program Director</p>
            <p className='text-gray-600 text-sm'>
              Expert in sustainable development and environmental conservation
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center'>
              <Users className='h-16 w-16 text-gray-500' />
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              Aisha Patel
            </h3>
            <p className='text-blue-600 font-medium mb-2'>Operations Manager</p>
            <p className='text-gray-600 text-sm'>
              Specialist in volunteer coordination and community partnerships
            </p>
          </div>
        </div>

        <div className='bg-gray-800 text-white rounded-2xl p-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold mb-4'>Get in Touch</h2>
            <p className='text-xl text-gray-300'>
              Have questions about our work or want to learn more? We'd love to
              hear from you.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 text-center'>
            <div>
              <Mail className='h-8 w-8 text-blue-400 mx-auto mb-4' />
              <h3 className='text-lg font-semibold mb-2'>Email</h3>
              <p className='text-gray-300'>info@hopeforward.org</p>
            </div>
            <div>
              <Phone className='h-8 w-8 text-blue-400 mx-auto mb-4' />
              <h3 className='text-lg font-semibold mb-2'>Phone</h3>
              <p className='text-gray-300'>+1 (555) 123-4567</p>
            </div>
            <div>
              <MapPin className='h-8 w-8 text-blue-400 mx-auto mb-4' />
              <h3 className='text-lg font-semibold mb-2'>Address</h3>
              <p className='text-gray-300'>
                123 Hope Street
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
