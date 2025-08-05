'use client'

import { useState } from 'react'

export default function SubmitComplimentComplaintPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Submit a Compliment or Complaint</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Your Feedback Matters</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            At Elite Portfolio Management, every interaction counts. Whether you had a great experience or want to share a concern, we want to hear from you.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Important Note</h3>
            <p className="text-blue-700">
              Please complete the form below to tell us what went well — or where we can improve. If you're looking to dispute an account, please use our Dispute My Account form instead.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 1: Account Information</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Elite Account Number (8 digits, found on your statement)</li>
              <li>Creditor Name</li>
              <li>First and Last Name</li>
              <li>Mailing Address (Street, City, State, Zip)</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 2: Preferred Contact Method</h3>
            <p className="text-gray-700 mb-4">Let us know the best way to reach you if we need to follow up:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Phone Number (optional)</li>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8 mt-1">
                <li>Select type: Mobile / Home / Work</li>
              </ul>
              <li>Email Address (optional)</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 3: Tell Us About Your Experience</h3>
            <p className="text-gray-700 mb-4">Please describe your compliment or complaint in the space below.</p>
            <p className="text-gray-700 mb-4">You may also upload relevant documents or screenshots if applicable.</p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">[Message Box]</p>
              <p className="text-sm text-gray-600">[File Upload Field]</p>
              <p className="text-sm text-gray-600">(CAPTCHA here)</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">We Take Feedback Seriously</h3>
            <p className="text-gray-700 leading-relaxed">
              Every compliment and complaint is reviewed by our internal compliance and service quality teams to ensure we're meeting our professional standards and your expectations. Thank you for helping us serve you better.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">What Happens Next?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your feedback will be reviewed within 2 business days</li>
              <li>If you provided contact information, we may reach out for additional details</li>
              <li>Complaints are escalated to our compliance team for thorough investigation</li>
              <li>You'll receive a response within 10 business days</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal Notice</h3>
            <p className="text-gray-700 leading-relaxed">
              This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
            <div className="text-gray-700">
              <p className="font-semibold">Elite Portfolio Management</p>
              <p>PO Box [Insert]</p>
              <p>Conroe TX, 77301</p>
              <p>833-381-4416</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">IMPORTANT</h3>
              <p className="text-sm text-gray-700 mb-4">
                This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.
              </p>
              <p className="text-sm text-gray-700 mb-6">
                Calls to and from this company may be monitored and/or recorded.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors duration-200"
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 