import Link from 'next/link'

export default function ConsumerToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-4">Consumer Tools</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Self-Service Options for Your Account</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            At Elite Portfolio Management, we believe in providing you with convenient, secure ways to manage your account. 
            Below you'll find a variety of self-service tools designed to help you resolve issues, update information, 
            and get the assistance you need quickly and efficiently.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Need to Make a Payment?</h3>
            <p className="text-blue-700 mb-4">
              For secure online payments, please visit our payment portal.
            </p>
            <a 
              href="https://portal.eliteportfoliomgmt.com/Login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Go to Payment Portal
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/consumer-tools/request-account-validation" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Request Account Validation</h3>
            <p className="text-gray-600">Get an itemized statement for your account delivered to your inbox.</p>
          </div>
        </a>

        <a href="/consumer-tools/bankruptcy-notification" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Bankruptcy Notification</h3>
            <p className="text-gray-600">Notify us if you've filed for bankruptcy to ensure proper handling.</p>
          </div>
        </a>

        <a href="/consumer-tools/fraud-identity-theft" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fraud & Identity Theft</h3>
            <p className="text-gray-600">Report suspected fraud or identity theft for immediate assistance.</p>
          </div>
        </a>

        <a href="/consumer-tools/remove-my-number" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Remove My Number</h3>
            <p className="text-gray-600">Update your contact preferences or remove incorrect phone numbers.</p>
          </div>
        </a>

        <a href="/consumer-tools/submit-compliment-complaint" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Submit Feedback</h3>
            <p className="text-gray-600">Share compliments or complaints to help us improve our service.</p>
          </div>
        </a>

        <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-400">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Need More Help?</h3>
          <p className="text-gray-600 mb-4">Can't find what you're looking for? Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
} 