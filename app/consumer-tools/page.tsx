import Link from 'next/link'

export default function ConsumerToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Consumer Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/consumer-tools/make-a-payment" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Make a Payment</h2>
          <p className="text-gray-600">Use our secure payment options to resolve your account.</p>
        </Link>
        
        <Link href="/consumer-tools/dispute-my-account" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Dispute My Account</h2>
          <p className="text-gray-600">Submit a dispute for your account information.</p>
        </Link>
        
        <Link href="/consumer-tools/request-account-validation" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Request Account Validation</h2>
          <p className="text-gray-600">Request validation of your account information.</p>
        </Link>
        
        <Link href="/consumer-tools/fraud-identity-theft" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Fraud & Identity Theft</h2>
          <p className="text-gray-600">Report fraud or identity theft concerns.</p>
        </Link>
        
        <Link href="/consumer-tools/remove-my-number" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Remove My Number</h2>
          <p className="text-gray-600">Request removal of your phone number from our system.</p>
        </Link>
        
        <Link href="/consumer-tools/bankruptcy-notification" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Bankruptcy Notification</h2>
          <p className="text-gray-600">Submit bankruptcy notification information.</p>
        </Link>
        
        <Link href="/consumer-tools/submit-compliment-complaint" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Submit a Compliment or Complaint</h2>
          <p className="text-gray-600">Share your feedback with us.</p>
        </Link>
      </div>
    </div>
  )
} 