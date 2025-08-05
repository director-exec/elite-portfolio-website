export default function SubmitComplimentComplaintPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Submit a Compliment or Complaint</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Your Feedback Matters</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-6">
          At Elite Portfolio Management, every interaction counts. Whether you had a great experience or want to share a concern, 
          we want to hear from you.
        </p>
        
        <p className="mb-8">
          Please complete the form below to tell us what went well — or where we can improve. If you're looking to dispute an account, 
          please use our Dispute My Account form instead.
        </p>

        <form className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Step 1: Account Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Elite Account Number (8 digits, found on your statement)</label>
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
            <h3 className="text-lg font-semibold mb-4">Step 2: Preferred Contact Method</h3>
            <p className="text-sm text-gray-600 mb-4">
              Let us know the best way to reach you if we need to follow up:
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number (optional)</label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Select type:</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="phoneType" value="mobile" className="mr-2" />
                    <span>Mobile</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="phoneType" value="home" className="mr-2" />
                    <span>Home</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="phoneType" value="work" className="mr-2" />
                    <span>Work</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address (optional)</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Step 3: Tell Us About Your Experience</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please describe your compliment or complaint in the space below. You may also upload relevant documents or screenshots if applicable.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows={6} placeholder="Please describe your experience here..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Upload Files (optional)</label>
                <input type="file" multiple className="w-full p-2 border border-gray-300 rounded" />
                <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6">
            <h3 className="text-lg font-semibold mb-2">We Take Feedback Seriously</h3>
            <p className="text-sm">
              Every compliment and complaint is reviewed by our internal compliance and service quality teams to ensure 
              we're meeting our professional standards and your expectations. Thank you for helping us serve you better.
            </p>
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
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  )
} 