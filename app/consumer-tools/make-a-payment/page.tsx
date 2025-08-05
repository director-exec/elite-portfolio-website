export default function MakePaymentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Make a Payment</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Secure, Flexible Options — On Your Terms</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-8">
          At Elite Portfolio Management, we make it easy to resolve your account with multiple secure payment methods. 
          Whether online, by phone, or by mail — our goal is to support you with speed, privacy, and convenience.
        </p>

        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-3">Pay Online</h3>
            <p className="mb-4">
              Make a payment anytime using our secure online portal. It's fast, encrypted, and available 24/7 — 
              giving you complete control over your account resolution.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Pay Online Now
            </button>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-3">Pay by Phone</h3>
            <p className="mb-2">
              Use our automated, interactive phone system to submit payment over the phone at your convenience.
            </p>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p className="font-semibold">Call: 1-877-XXX-XXXX</p>
              <p className="text-sm text-gray-600">Available: 24 hours a day / 7 days a week</p>
            </div>
            <p className="text-sm text-gray-600">
              Just follow the prompts — it's quick, private, and always secure.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-3">Pay by Mail</h3>
            <p className="mb-4">
              Please include your account number and send your payment to:
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Elite Portfolio Management</p>
              <p>PO BOX [Updated PO Box]</p>
              <p>[City, State ZIP]</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <h3 className="text-xl font-semibold mb-3">Need Assistance?</h3>
            <p className="mb-4">Our team is here to help.</p>
            <p className="mb-2">
              If you'd prefer to speak directly with an account representative, call us at:
            </p>
            <p className="font-semibold text-lg">1-800-XXX-XXXX</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded text-sm mt-8">
          <p><strong>Required Notice:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
        </div>
      </div>
    </div>
  )
} 