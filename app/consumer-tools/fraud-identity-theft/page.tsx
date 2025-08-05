'use client'

import { useState } from 'react'

export default function FraudIdentityTheftPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Fraud & Identity Theft</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Suspect Fraud? We're Here to Help.</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            If you believe your account has been impacted by fraud or identity theft, please contact Elite Portfolio Management immediately so we can assist you in resolving the matter with urgency and care.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Immediate Action Required</h3>
            <p className="text-blue-700 font-semibold">
              Call us at 833-381-4416
            </p>
            <p className="text-blue-700 mt-2">
              Your privacy and security are our priority.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Report Identity Theft to the FTC</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can also file a formal identity theft report with the Federal Trade Commission at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <a 
                href="https://www.IdentityTheft.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                🔗 www.IdentityTheft.gov
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">What to Expect</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Immediate account review and security measures</li>
              <li>Assistance with documentation and reporting</li>
              <li>Guidance on protecting your identity going forward</li>
              <li>Regular updates on the status of your case</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Additional Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Credit Bureaus</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Equifax: 1-800-525-6285</li>
                  <li>• Experian: 1-888-397-3742</li>
                  <li>• TransUnion: 1-800-680-7289</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Federal Agencies</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• FTC: 1-877-438-4338</li>
                  <li>• Social Security: 1-800-772-1213</li>
                  <li>• IRS: 1-800-908-4490</li>
                </ul>
              </div>
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