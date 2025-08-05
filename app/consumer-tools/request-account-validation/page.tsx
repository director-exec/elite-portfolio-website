'use client'

import { useState } from 'react'

export default function RequestAccountValidationPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Request Account Validation</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Get Account Details Delivered to Your Inbox</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            If you would like an itemized statement for your account with Elite Portfolio Management, please complete the form below. By submitting your request, you confirm that you are the authorized account holder and that the information you've provided is complete and accurate.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Please allow up to 30 days for your request to be processed.
          </p>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Important Notice Regarding Email Delivery</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your itemized statement will be sent via standard (unencrypted) email. While convenient, this method may not offer the same level of security as postal mail. By submitting this form, you acknowledge and accept delivery in this format.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To avoid delivery issues, we recommend adding our email address — support@eliteportfoliomgmt.com — to your safe sender list.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">What You'll Need to Provide:</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">1. General Account Information</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Elite Account Number (8-digit)</li>
                  <li>Creditor Name</li>
                  <li>Your Full Legal Name</li>
                  <li>Mailing Address (Street, City, State, Zip)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">2. Contact Details & Consent</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Valid Phone Number</li>
                  <li>Valid Email Address</li>
                  <li>Acknowledgment of the following:</li>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8 mt-1">
                    <li>You may receive communications via phone, text, or email</li>
                    <li>You confirm ownership of the contact details you've submitted</li>
                    <li>You request electronic delivery of this document</li>
                    <li>You may revoke consent at any time through reasonable means</li>
                  </ul>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-gray-700">I acknowledge and agree to the above terms</span>
              </label>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal Disclosure</h3>
            <p className="text-gray-700 leading-relaxed">
              This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
            <div className="text-gray-700">
              <p className="font-semibold">Elite Portfolio Management</p>
              <p>PO Box [Updated]</p>
              <p>Conroe TX, 77301</p>
              <p>Phone: 833-381-4416</p>
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
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-200"
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