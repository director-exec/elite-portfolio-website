export default function FraudIdentityTheftPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Fraud & Identity Theft</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Suspect Fraud? We're Here to Help.</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <p className="mb-4">
            If you believe your account has been impacted by fraud or identity theft, please contact Elite Portfolio Management 
            immediately so we can assist you in resolving the matter with urgency and care.
          </p>
          <p className="font-semibold text-lg">Call us at 1-800-XXX-XXXX</p>
          <p className="text-sm text-gray-600 mt-2">Your privacy and security are our priority.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">Report Identity Theft to the FTC</h3>
          <p className="mb-4">
            You can also file a formal identity theft report with the Federal Trade Commission at:
          </p>
          <a 
            href="https://www.IdentityTheft.gov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            🔗 www.IdentityTheft.gov
          </a>
        </div>

        <div className="bg-gray-100 p-4 rounded text-sm">
          <p><strong>Legal Disclosure:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
        </div>

        <div className="bg-gray-50 p-4 rounded text-sm mt-4">
          <p><strong>Elite Portfolio Management</strong></p>
          <p>PO Box [Insert]</p>
          <p>[City, State ZIP]</p>
          <p>1-800-XXX-XXXX</p>
        </div>
      </div>
    </div>
  )
} 