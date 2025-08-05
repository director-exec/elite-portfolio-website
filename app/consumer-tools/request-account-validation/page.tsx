export default function RequestAccountValidationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Request Account Validation</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Get Account Details Delivered to Your Inbox</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-6">
          If you would like an itemized statement for your account with Elite Portfolio Management, please complete the form below. 
          By submitting your request, you confirm that you are the authorized account holder and that the information you've provided 
          is complete and accurate.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Please allow up to 30 days for your request to be processed.</strong>
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <h3 className="font-semibold mb-2">Important Notice Regarding Email Delivery</h3>
          <p className="text-sm mb-2">
            Your itemized statement will be sent via standard (unencrypted) email. While convenient, this method may not offer 
            the same level of security as postal mail. By submitting this form, you acknowledge and accept delivery in this format.
          </p>
          <p className="text-sm">
            To avoid delivery issues, we recommend adding our email address — 
            <strong> support@eliteportfoliomgmt.com</strong> — to your safe sender list.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">What You'll Need to Provide:</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. General Account Information</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Elite Account Number (8-digit)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Creditor Name</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Full Legal Name</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Mailing Address (Street, City, State, Zip)</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded" rows={3}></textarea>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Contact Details & Consent</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Valid Phone Number</label>
                    <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Valid Email Address</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-medium mb-2">Acknowledgment of the following:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>You may receive communications via phone, text, or email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>You confirm ownership of the contact details you've submitted</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>You request electronic delivery of this document</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>You may revoke consent at any time through reasonable means</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="acknowledge" className="mt-1" />
                <label htmlFor="acknowledge" className="text-sm">
                  I acknowledge and agree to the above terms
                </label>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm">
            <p><strong>Legal Disclosure:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded text-sm">
            <p><strong>Elite Portfolio Management</strong></p>
            <p>PO Box [Updated]</p>
            <p>[City, State ZIP]</p>
            <p>Phone: 1-800-XXX-XXXX</p>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
} 