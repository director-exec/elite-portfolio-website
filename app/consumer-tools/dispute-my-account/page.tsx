export default function DisputeMyAccountPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Dispute My Account</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">We're Here to Help — Let's Resolve It Together</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-6">
          If you believe an account placed with Elite Portfolio Management is inaccurate or invalid, you have the right to dispute it. 
          Please complete the form below to initiate a review of your account.
        </p>
        
        <p className="mb-8">
          You're welcome (but not required) to explain the reason for your dispute or upload supporting documentation 
          to help us investigate your claim as efficiently as possible.
        </p>

        <form className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Step 1: Account Information</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please provide your details exactly as shown on your Elite account statement:
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Elite Account Number (8-digit)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Creditor Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">First and Last Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mailing Address (Street, City, State, Zip)</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows={3}></textarea>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Step 2: Contact Information (Optional)</h3>
            <p className="text-sm text-gray-600 mb-4">
              Providing this information is optional, but it helps us communicate with you more efficiently during the resolution process.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type of Phone (Mobile, Home, Work)</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select type</option>
                  <option value="mobile">Mobile</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Step 3: Explain Your Dispute (Optional)</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you'd like to include a message explaining the reason for your dispute, or attach any related documents 
              (such as billing statements or correspondence), you may do so here.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows={4} placeholder="Explain your dispute here..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Attach File</label>
                <input type="file" className="w-full p-2 border border-gray-300 rounded" />
                <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <h3 className="text-lg font-semibold mb-2">Need to Speak with Someone?</h3>
            <p className="mb-2">You can contact us directly to speak with an account representative:</p>
            <p className="font-semibold text-lg">1-800-XXX-XXXX</p>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm">
            <p><strong>Legal Disclosure:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded text-sm">
            <p><strong>Elite Portfolio Management</strong></p>
            <p>PO Box [Insert]</p>
            <p>[City, State ZIP]</p>
            <p>1-800-XXX-XXXX</p>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Submit Dispute
          </button>
        </form>
      </div>
    </div>
  )
} 