export default function RemoveMyNumberPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Remove My Number</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Need Us to Stop Calling a Number? Let Us Know.</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-6">
          If you've received calls from Elite Portfolio Management in error — or if you would prefer we contact you at a 
          different number — please complete the form below. Your request will be processed within 5 business days.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm">
            <strong>If the matter is urgent, we recommend calling us directly at 1-800-XXX-XXXX.</strong>
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Update Your Contact Preference</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please fill out the fields below so we can update our records accurately:
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">The Number We Are Currently Calling (required)</label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Select One:</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="reason" value="incorrect" className="mr-2" />
                    <span>The number is incorrect — please remove it</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="reason" value="different" className="mr-2" />
                    <span>The number is correct, but I prefer to be reached at a different number</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Preferred Contact Number (if different)</label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Comments or Additional Notes (optional)</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows={3}></textarea>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm">
            <p><strong>Important Notice:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded text-sm">
            <p><strong>Elite Portfolio Management</strong></p>
            <p>PO Box [Insert Address]</p>
            <p>[City, State ZIP]</p>
            <p>1-800-XXX-XXXX</p>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
} 