import Link from 'next/link'

export default function ConsumerToolsPage() {
  const consumerTools = [
    {
      id: 'make-payment',
      title: 'Make a Payment',
      description: 'Use our secure, convenient payment options to resolve your account quickly and easily. We offer multiple payment methods including online payments, phone payments, and mail-in options to accommodate your preferences.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
      link: 'https://portal.eliteportfoliomgmt.com/',
      external: true,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-validation',
      title: 'Request Account Validation',
      description: 'Get account validation for your account delivered to your inbox. This detailed breakdown helps you understand your account balance and payment history for better financial planning.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      link: '/consumer-tools/request-account-validation',
      external: false,
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'bankruptcy-notification',
      title: 'Bankruptcy Notification',
      description: 'Notify us if you\'ve filed for bankruptcy to ensure proper handling of your account. This helps us comply with bankruptcy laws and ensures your account is handled appropriately during the bankruptcy process.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      link: '/consumer-tools/bankruptcy-notification',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'fraud-identity-theft',
      title: 'Fraud & Identity Theft',
      description: 'Report suspected fraud or identity theft for immediate assistance and protection. Our dedicated team will help you resolve fraudulent activity and protect your personal information.',
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0d14?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/fraud-identity-theft',
      external: false,
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'remove-number',
      title: 'Remove My Number',
      description: 'Update your contact preferences or remove incorrect phone numbers from our records. This ensures we have your current contact information and respects your communication preferences.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/remove-my-number',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'feedback',
      title: 'Submit Feedback',
      description: 'Share compliments or complaints to help us improve our service and better assist you. Your feedback is valuable and helps us maintain the highest standards of customer service.',
      image: 'https://images.unsplash.com/photo-5fNmWej4tAA?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/submit-compliment-complaint',
      external: false,
      background: 'grey',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Consumer Tools</h1>
          <p className="text-xl">Self-service options designed to help you manage your account efficiently and securely.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Self-Service Options for Your Account</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Elite Portfolio Management, we believe in providing you with convenient, secure ways to manage your account. 
              Below you'll find a variety of self-service tools designed to help you resolve issues, update information, 
              and get the assistance you need quickly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {consumerTools.map((tool, index) => (
        <section key={tool.id} className={`py-16 ${tool.background === 'grey' ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {tool.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img 
                        src={tool.image} 
                        alt={tool.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="order-2">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{tool.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed mb-6">
                        {tool.description}
                      </div>
                      {tool.external ? (
                        <a 
                          href={tool.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                          style={{ color: '#414757' }}
                        >
                          Access Tool
                        </a>
                      ) : (
                        <Link href={tool.link} className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
                          Learn More
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{tool.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed mb-6">
                        {tool.description}
                      </div>
                      {tool.external ? (
                        <a 
                          href={tool.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                          style={{ color: '#414757' }}
                        >
                          Access Tool
                        </a>
                      ) : (
                        <Link href={tool.link} className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
                          Learn More
                        </Link>
                      )}
                    </div>
                    <div className="order-1 lg:order-2">
                      <img 
                        src={tool.image} 
                        alt={tool.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Need additional help? Our team is here to assist you with any questions or concerns.
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
} 