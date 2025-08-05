export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">About Elite Portfolio Management</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">A Reputation Built on Integrity. A Future Powered by Innovation.</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
            <p className="mb-4">
              Elite Portfolio Management is a nationally recognized third-party collections and receivables management firm 
              built on a foundation of ethics, performance, and compliance. With decades of experience serving clients across 
              regulated industries, we combine expert human insight with powerful digital tools to deliver superior financial 
              results — while protecting the brands we represent.
            </p>
            <p>
              We are proudly woman-owned and operate with the belief that compliance and transparency are non-negotiable 
              in today's complex regulatory environment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">What We Stand For</h3>
            <p>
              We treat your brand as an extension of our own. Every touchpoint reflects our dedication to preserving your 
              reputation, communicating with empathy, and aligning our operations with your values. Whether we're recovering 
              past-due balances or handling sensitive account situations, we work as silent stewards of your public image.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">How We Operate</h3>
            <p>
              Respect, empathy, and compliance guide everything we do. Every consumer interaction is conducted with 
              professionalism and clarity. Our agents are trained not only in regulation — but in tone, timing, and approach. 
              We uphold a "resolution mindset" in all conversations, helping consumers resolve obligations with dignity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our People</h3>
            <p>
              Our team is our power. We hire experienced professionals who thrive in a culture of integrity, collaboration, 
              and continuous improvement. Every team member undergoes rigorous training and performance auditing — not just to 
              maintain standards, but to raise them. At Elite, excellence is a shared expectation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">How We Deliver</h3>
            <p>
              We succeed by listening. Every client has unique KPIs, operational nuances, and brand sensitivities. We tailor 
              each engagement to align with those needs while delivering clear, measurable recovery results. Whether early-stage 
              outreach or complex portfolio management, our mission is to maximize returns while minimizing risk.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Where We Work</h3>
            <p>
              Elite Portfolio Management is licensed, bonded, and fully operational in all 50 U.S. states and Puerto Rico. 
              We maintain Certificates of Authority, statutory bonds, trust accounts, and resident office requirements in every 
              jurisdiction where applicable law demands it. Your nationwide presence is supported by ours.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/about/security" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Security</h3>
            <p className="text-gray-600">Learn about our comprehensive security protocols and data protection measures.</p>
          </div>
        </a>

        <a href="/about/compliance" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Compliance</h3>
            <p className="text-gray-600">Discover how we maintain the highest standards of regulatory compliance.</p>
          </div>
        </a>

        <a href="/about/industries-we-serve" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Industries We Serve</h3>
            <p className="text-gray-600">Explore the diverse industries we support with specialized solutions.</p>
          </div>
        </a>

        <a href="/about/community-involvement" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Community Involvement</h3>
            <p className="text-gray-600">See how we give back to the communities we serve.</p>
          </div>
        </a>
      </div>
    </div>
  )
} 