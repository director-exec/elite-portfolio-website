'use client'

import { useState } from 'react'

export default function BankruptcyNotificationPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Notification</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Have You Filed for Bankruptcy?</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            If you've filed for bankruptcy and received a notice from Elite Portfolio Management, please let us know as soon as possible by submitting the form below or uploading your bankruptcy documentation directly through our secure portal.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            This information helps ensure your account is handled appropriately and in accordance with all applicable laws.
          </p>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 1: General Account Information</h3>
            <p className="text-gray-700 mb-4">Please provide the following details as shown on your Elite statement:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Elite Account Number (8 digits)</li>
              <li>Creditor Name</li>
              <li>First and Last Name</li>
              <li>Full Mailing Address (Street, City, State, Zip)</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 2: Bankruptcy Case Details</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Bankruptcy Case Number</li>
              <li>Chapter (e.g., 7, 11, 13)</li>
              <li>Filing Court or Jurisdiction</li>
              <li>Date of Bankruptcy Filing</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Step 3: Upload Documentation or Add Comments</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Attach any relevant bankruptcy documents (PDF, DOC, image files accepted)</li>
              <li>You may also include any notes or messages related to your filing</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">[Attach Files]</p>
              <p className="text-sm text-gray-600">[Message Box]</p>
              <p className="text-sm text-gray-600">(CAPTCHA field here)</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Need Assistance?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're here to help ensure your legal rights are fully respected.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Call us at 833-381-4416 to speak with an account representative.
            </p>
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