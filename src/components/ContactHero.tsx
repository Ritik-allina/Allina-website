import React, { useState } from 'react';
import { sendEmail } from '@/lib/utils';

export const ContactHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('General Enquiries');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const result = await sendEmail(formData, activeTab);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      console.log('Email sent successfully:', result.message);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-2 sm:pb-4 md:pb-6" style={{ backgroundColor: '#E7DED7' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h1 
            className="text-[#06153A] mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              letterSpacing: '0.01em'
            }}
          >
            Let's Get In Touch
          </h1>
          <p 
            className="text-[#06153A] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.01em'
            }}
          >
            We're here to help! Whether you have a general inquiry, a business proposal, or are interested in partnering with us as a supplier, we'd love to hear from you. At ALLINA, we value open communication and are committed to providing prompt and helpful responses to all inquiries.
          </p>
        </div>

        {/* How can we help you? Section */}
        <div className="mb-0 sm:mb-4">
          {/* Text and Tabs - Positioned to align with form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-3 sm:mb-4">
            {/* Left side - How can we help you text */}
            <div>
              <h2 
                className="text-[#06153A] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4"
                style={{ 
                  fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                  letterSpacing: '0.02em'
                }}
              >
                How can we help you?
              </h2>
              <p 
                className="text-[#06153A] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                style={{ 
                  fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.01em'
                }}
              >
                Explore the sections below to find the best way to get in touch with us
              </p>
            </div>
            
            {/* Right side - Tabs aligned with form width */}
            <div 
              className="flex flex-col sm:flex-row items-stretch gap-1 w-[90%] ml-[5%]"
              style={{
                backgroundColor: '#E7DED7',
                borderRadius: '10px',
                border: '1px solid #000000',
                padding: '5px 4px'
              }}
            >
              {/* General Enquiries Tab */}
              <button
                onClick={() => setActiveTab('General Enquiries')}
                className="flex items-center justify-center relative overflow-hidden flex-1 px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-4 lg:px-6 lg:py-4 rounded-md min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]"
                style={{
                  backgroundColor: activeTab === 'General Enquiries' ? '#06153A' : 'transparent'
                }}
              >
                <span
                  className="text-[10px] sm:text-xs md:text-sm lg:text-base font-normal text-center leading-tight"
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    color: activeTab === 'General Enquiries' ? '#FFFFFF' : '#06153A',
                    letterSpacing: '0'
                  }}
                >
                  General Enquiries
                </span>
              </button>

              {/* Business Enquiries Tab */}
              <button
                onClick={() => setActiveTab('Business Enquiries')}
                className="flex items-center justify-center relative overflow-hidden flex-1 px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-4 lg:px-6 lg:py-4 rounded-md min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]"
                style={{
                  backgroundColor: activeTab === 'Business Enquiries' ? '#06153A' : 'transparent'
                }}
              >
                <span
                  className="text-[10px] sm:text-xs md:text-sm lg:text-base font-normal text-center leading-tight"
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    color: activeTab === 'Business Enquiries' ? '#FFFFFF' : '#06153A',
                    letterSpacing: '0'
                  }}
                >
                  Business Enquiries
                </span>
              </button>

              {/* Supplier Enquiries Tab */}
              <button
                onClick={() => setActiveTab('Supplier Enquiries')}
                className="flex items-center justify-center relative overflow-hidden flex-1 px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-4 lg:px-6 lg:py-4 rounded-md min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]"
                style={{
                  backgroundColor: activeTab === 'Supplier Enquiries' ? '#06153A' : 'transparent'
                }}
              >
                <span
                  className="text-[10px] sm:text-xs md:text-sm lg:text-base font-normal text-center leading-tight"
                  style={{
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    color: activeTab === 'Supplier Enquiries' ? '#FFFFFF' : '#06153A',
                    letterSpacing: '0'
                  }}
                >
                  Supplier Enquiries
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dllukqtlt/image/upload/v1751119882/contact_fghum1.jpg"
                alt="Modern Office Conference Room"
                className="w-full object-cover object-top rounded-[20px] max-w-full h-[400px] sm:h-[500px] md:h-[580px] lg:h-[650px] xl:h-[750px] "
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-transparent p-4 sm:p-6 lg:p-8">
              <div className="mb-4 sm:mb-6">
                <p 
                  className="text-[#06153A] mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                  style={{ 
                    fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '1%'
                  }}
                >
                  Have a question or feedback? We're happy to assist! Use the form below to reach out to us for any general inquiries, and our team will get back to you as soon as possible.
                </p>
              </div>

              <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4 sm:gap-6 lg:gap-8"
              >
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label 
                      htmlFor="firstName" 
                      className="block text-[#06153A] text-sm font-medium mb-2"
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent h-12 sm:h-14 md:h-14 lg:h-15"
                      placeholder="Your First Name..."
                      style={{ 
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
                        backgroundColor: '#E7DED7',
                        borderRadius: '14px',
                        border: '1px solid #606060'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="lastName" 
                      className="block text-[#06153A] text-sm font-medium mb-2"
                      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent h-12 sm:h-14 md:h-14 lg:h-15"
                      placeholder="Your Last Name..."
                      style={{ 
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
                        backgroundColor: '#E7DED7',
                        borderRadius: '14px',
                        border: '1px solid #606060'
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-[#06153A] text-sm font-medium mb-2"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent h-12 sm:h-14 md:h-14 lg:h-15"
                    placeholder="Your Email Address..."
                    style={{ 
                      fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
                      backgroundColor: '#E7DED7',
                      borderRadius: '14px',
                      border: '1px solid #606060'
                    }}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-[#06153A] text-sm font-medium mb-2"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent h-12 sm:h-14 md:h-14 lg:h-15"
                    placeholder="Your Contact Number..."
                    style={{ 
                      fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
                      backgroundColor: '#E7DED7',
                      borderRadius: '14px',
                      border: '1px solid #606060'
                    }}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-[#06153A] text-sm font-medium mb-2"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06153A] focus:border-transparent resize-vertical min-h-[100px] sm:min-h-[120px] md:min-h-[130px] lg:min-h-[140px] py-3 sm:py-4"
                    placeholder="Your question or feedback..."
                    style={{ 
                      fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
                      backgroundColor: '#E7DED7',
                      borderRadius: '14px',
                      border: '1px solid #606060'
                    }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#06153A] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#0a1f4a] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                
                {/* Message Display */}
                {submitMessage && (
                  <div className="text-[#06153A] text-sm text-center w-full mt-4 p-3 bg-white/50 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 