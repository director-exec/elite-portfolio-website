export default function CreditBureauReportingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Credit Bureau Reporting</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Optional. Compliant. Powerful.</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="mb-6">
          As part of our full-service recovery solutions, Elite Portfolio Management offers optional credit bureau reporting 
          to enhance your collection strategy — at no additional cost.
        </p>
        
        <p className="mb-8">
          We report only with your authorization, and we handle every file with full adherence to the Fair Credit Reporting Act (FCRA) 
          and all applicable regulations. Disputed accounts are flagged appropriately, and all consumer data is transmitted securely and responsibly.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Benefits of Partnering with Elite for Credit Reporting</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">✅</span>
              <div>
                <h4 className="font-semibold">Save Time</h4>
                <p className="text-gray-600">We handle all bureau submissions on your behalf — no extra systems or staffing required.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">✅</span>
              <div>
                <h4 className="font-semibold">Stay Compliant</h4>
                <p className="text-gray-600">We ensure all reporting is accurate, up to date, and reflects the current account status (including disputes), in accordance with FCRA.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">✅</span>
              <div>
                <h4 className="font-semibold">Avoid Extra Overhead</h4>
                <p className="text-gray-600">No software costs, no integration burdens — we manage the full reporting process from start to finish.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">✅</span>
              <div>
                <h4 className="font-semibold">Improve Recovery Rates</h4>
                <p className="text-gray-600">Credit reporting, when used strategically, can increase repayment motivation without compromising consumer rights.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">✅</span>
              <div>
                <h4 className="font-semibold">Maximize Internal Productivity</h4>
                <p className="text-gray-600">Your team focuses on core business while we handle the credit reporting logistics and compliance protocols.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Gateway to the Bureaus</h3>
          <p className="mb-4">Elite Portfolio Management is fully integrated with the nation's three major credit bureaus:</p>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">●</span>
              <span>Experian</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">●</span>
              <span>Equifax</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">●</span>
              <span>TransUnion</span>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            Our secure systems and reporting protocols ensure that authorized accounts are updated accurately, flagged appropriately, and tracked in real-time.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-2">Have questions about how credit reporting fits your strategy?</h3>
          <p className="font-semibold">Call 1-800-XXX-XXXX to speak with our compliance and recovery team.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded text-sm mb-4">
          <p><strong>Legal Notice:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4">
          <h4 className="font-semibold mb-2">NYC Language Access Disclosure</h4>
          <p className="text-sm mb-2">
            Per New York City Department of Consumer and Worker Protection regulations, we ask for your preferred language.
          </p>
          <p className="text-sm mb-2">
            Our services are currently provided in English. Multilingual resources are available at:
          </p>
          <a 
            href="https://www.nyc.gov/dcwp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
          >
            🔗 www.nyc.gov/dcwp
          </a>
          <p className="text-sm mt-2">
            Alternate communication formats (large print, braille, audio CD) available upon request.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded text-sm">
          <p><strong>Elite Portfolio Management</strong></p>
          <p>PO Box [Insert Address]</p>
          <p>[City, State ZIP]</p>
          <p>1-800-XXX-XXXX</p>
        </div>
      </div>
    </div>
  )
} 