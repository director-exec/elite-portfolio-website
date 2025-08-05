export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Let's Get You to the Right Place</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-8">
          Have a question or need assistance? Select the option below that best matches your situation — we're ready to help.
        </p>

        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">🧾 Trying to Resolve an Account?</h3>
            <p className="mb-4">
              If you've received a communication from Elite Portfolio Management and want to discuss your account or make a payment, 
              our team is here to assist you.
            </p>
            <p className="font-semibold mb-2">Call us at 1-800-XXX-XXXX</p>
            <p className="text-sm text-gray-600">Or visit: Make a Payment | Dispute My Account | Submit a Request</p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">💼 Need Help With Receivables?</h3>
            <p className="mb-4">
              Looking to improve collections or streamline your accounts receivable process? Contact our solutions team to learn 
              how we help clients maximize recovery while protecting their brand.
            </p>
            <p className="font-semibold mb-2">Email: solutions@eliteportfoliomgmt.com</p>
            <p className="font-semibold">Business Inquiries: 1-800-XXX-XXXX (Option 2)</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">👥 Already a Client?</h3>
            <p className="mb-4">
              If you're a current client and need support, reporting access, or a service update, we're always here for you.
            </p>
            <p className="font-semibold mb-2">Client Services: support@eliteportfoliomgmt.com</p>
            <p className="font-semibold">Dedicated Line: 1-800-XXX-XXXX (Option 3)</p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">📄 Employment Verification or HR Questions?</h3>
            <p className="mb-4">
              Need to verify employment, check holiday hours, or inquire about benefits?
            </p>
            <p className="font-semibold mb-2">HR Department: hr@eliteportfoliomgmt.com</p>
            <p className="text-sm text-gray-600">Hours: Monday–Friday | 8:00 AM – 5:00 PM ET</p>
            <p className="text-sm text-gray-600">Closed on all federal holidays.</p>
          </div>

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">🎯 Looking for a Career?</h3>
            <p className="mb-4">
              Explore open positions, competitive pay, and flexible schedules on our Careers Page. We offer paid training, 
              growth opportunities, and a people-first environment.
            </p>
            <p className="font-semibold">Email: careers@eliteportfoliomgmt.com</p>
          </div>

          <div className="bg-gray-50 p-6 rounded">
            <h3 className="text-lg font-semibold mb-4">Mailing Address</h3>
            <div className="space-y-1">
              <p><strong>Elite Portfolio Management</strong></p>
              <p>PO Box [Insert]</p>
              <p>[City, State ZIP]</p>
              <p className="font-semibold mt-2">General: 1-800-XXX-XXXX</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm">
            <p><strong>Legal Disclosure:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 