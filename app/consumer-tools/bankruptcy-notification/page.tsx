export default function BankruptcyNotificationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Notification</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Have You Filed for Bankruptcy?</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-6">
          If you've filed for bankruptcy and received a notice from Elite Portfolio Management, please let us know as soon 
          as possible by submitting the form below or uploading your bankruptcy documentation directly through our secure portal.
        </p>
        
        <p className="mb-8">
          This information helps ensure your account is handled appropriately and in accordance with all applicable laws.
        </p>

        <form className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Step 1: General Account Information</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please provide the following details as shown on your Elite statement:
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Elite Account Number (8 digits)</label>
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
                <label className="block text-sm font-medium mb-1">Full Mailing Address (Street, City, State, Zip)</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows={3}></textarea>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Step 2: Bankruptcy Case Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Bankruptcy Case Number</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Chapter (e.g., 7, 11, 13)</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select chapter</option>
                  <option value="7">Chapter 7</option>
                  <option value="11">Chapter 11</option>
                  <option value="13">Chapter 13</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Filing Court or Jurisdiction</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Bankruptcy Filing</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Step 3: Upload Documentation or Add Comments</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Attach any relevant bankruptcy documents</label>
                <input type="file" multiple className="w-full p-2 border border-gray-300 rounded" />
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, image files accepted</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">You may also include any notes or messages related to your filing</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows={4} placeholder="Add any additional comments here..."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
            <p className="mb-2">We're here to help ensure your legal rights are fully respected.</p>
            <p className="font-semibold">Call us at 1-800-XXX-XXXX to speak with an account representative.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm">
            <p><strong>Legal Notice:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded text-sm">
            <p><strong>Elite Portfolio Management</strong></p>
            <p>PO Box [Insert]</p>
            <p>[City, State ZIP]</p>
            <p>1-800-XXX-XXXX</p>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Submit Bankruptcy Notification
          </button>
        </form>
      </div>
    </div>
  )
} 