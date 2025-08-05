'use client'

import { useState } from 'react'

export default function RemoveMyNumberPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Remove My Number</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Need Us to Stop Calling a Number? Let Us Know.</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            If you've received calls from Elite Portfolio Management in error — or if you would prefer we contact you at a different number — please complete the form below. Your request will be processed within 5 business days.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800">Urgent Matters</h3>
            <p className="text-yellow-700">
              If the matter is urgent, we recommend calling us directly at 833-381-4416.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Update Your Contact Preference</h3>
            <p className="text-gray-700 mb-4">Please fill out the fields below so we can update our records accurately:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>First Name</li>
              <li>Last Name</li>
              <li>The Number We Are Currently Calling (required)</li>
              <li>Select One:</li>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8 mt-1">
                <li>The number is incorrect — please remove it</li>
                <li>The number is correct, but I prefer to be reached at a different number</li>
              </ul>
              <li>Preferred Contact Number (if different)</li>
              <li>Comments or Additional Notes (optional)</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">(CAPTCHA field here)</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">What Happens Next?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your request will be reviewed within 24 hours</li>
              <li>Changes will be implemented within 5 business days</li>
              <li>You'll receive a confirmation email once processed</li>
              <li>If you provided an alternative number, we'll begin using it immediately</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Important Notice</h3>
            <p className="text-gray-700 leading-relaxed">
              This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
            <div className="text-gray-700">
              <p className="font-semibold">Elite Portfolio Management</p>
              <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
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