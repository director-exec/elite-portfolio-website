'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SubmitComplimentComplaintPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  const feedbackSections = [
    {
      id: 'important-note',
      title: 'Important Note',
      description: 'Please complete the form below to tell us what went well — or where we can improve. If you\'re looking to dispute an account, please use our Dispute My Account form instead. We value your feedback and use it to improve our services.',
      image: 'https://images.pexels.com/photos/33332413/pexels-photo-33332413.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-information',
      title: 'Step 1: Account Information',
      description: 'Please provide your Elite Account Number (8 digits, found on your statement), creditor name, first and last name, and complete mailing address including street, city, state, and zip code. This helps us locate your account quickly.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'contact-method',
      title: 'Step 2: Preferred Contact Method',
      description: 'Let us know the best way to reach you if we need to follow up. You can provide a phone number (mobile, home, or work) and/or email address. This ensures we can respond to your feedback promptly.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'experience-details',
      title: 'Step 3: Tell Us About Your Experience',
      description: 'Please describe your compliment or complaint in detail. You may also upload relevant documents or screenshots if applicable. The more specific you can be, the better we can address your feedback.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'take-feedback-seriously',
      title: 'We Take Feedback Seriously',
      description: 'Every compliment and complaint is reviewed by our internal compliance and service quality teams to ensure we\'re meeting our professional standards and your expectations. Thank you for helping us serve you better.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-happens-next',
      title: 'What Happens Next?',
      description: 'Your feedback will be reviewed within 2 business days. If you provided contact information, we may reach out for additional details. Complaints are escalated to our compliance team for thorough investigation, and you\'ll receive a response within 10 business days.',
      image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background: 'grey',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Submit a Compliment or Complaint</h1>
          <p className="text-xl">Your Feedback Matters</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Help Us Serve You Better</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Elite Portfolio Management, every interaction counts. Whether you had a great experience or want to share a concern, 
              we want to hear from you. Your feedback helps us improve our services and maintain the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Sections */}
      {feedbackSections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.background === 'grey' ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {section.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="order-2">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Feedback Form</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Elite Account Number (8 digits)</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Creditor Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mailing Address</label>
                  <input type="text" placeholder="Street Address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="City" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="State" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <input type="text" placeholder="ZIP Code" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (optional)</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Mobile</option>
                      <option>Home</option>
                      <option>Work</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address (optional)</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
                  <textarea rows={6} placeholder="Please describe your compliment or complaint in detail..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents (optional)</label>
                  <input type="file" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">(CAPTCHA here)</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="text-lg text-gray-700 space-y-4">
                <p className="font-semibold">Elite Portfolio Management</p>
                <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
                <p className="text-xl font-semibold text-blue-900">833-381-4416</p>
                <p className="mt-4">
                  <strong>General Email:</strong> info@eliteportfoliomgmt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Legal Notice</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Have additional questions or need immediate assistance?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
            Contact Us Today!
          </Link>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">IMPORTANT</h3>
              <p className="text-sm text-gray-700 mb-4">
                This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.
              </p>
              <p className="text-sm text-gray-700 mb-6">
                Calls to and from this company may be monitored and/or recorded.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-200"
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 