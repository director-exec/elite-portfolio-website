export default function SkipTracingPage() {
  const serviceSections = [
    {
      id: 'efficient-tracing',
      title: 'Efficient. Timely. Accurate.',
      description: 'At Elite Portfolio Management, we combine real-time data access with advanced skip tracing technology to locate consumers and businesses faster — and recover more. Every account placed with us undergoes automated skip tracing, regardless of balance, and at no additional cost to our clients.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'real-time-data',
      title: 'Real-Time Data Access',
      description: 'We\'re connected to top-tier data sources that represent over 95% of U.S. consumers and businesses, allowing us to verify, update, and confirm location data instantly. Our systems cross-reference multiple identifiers — address history, employment, phone numbers, utilities, credit activity, and more — to pinpoint right-party contacts with precision.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'advanced-search',
      title: 'Advanced Search Logic',
      description: 'Our dedicated skip tracing team escalates complex cases using supplemental data strategies and manual investigations, based on account value and risk indicators. High-value accounts receive enhanced tracing and deeper analytical reviews to maximize ROI and optimize recovery sequence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'superior-results',
      title: 'Elite-Level Accuracy. Unmatched Results.',
      description: 'Skip tracing isn\'t an afterthought — it\'s baked into every collection strategy we deploy. That\'s how Elite delivers superior performance across even the toughest portfolios. We provide higher right-party contact (RPC) rates, faster engagement with debtors, reduced cost-per-collection, recovery of otherwise unreachable accounts, and real-time updates and tracking transparency.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Skip Tracing</h1>
          <p className="text-xl">Efficient. Timely. Accurate.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Locate Consumers and Businesses Faster</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Elite Portfolio Management, we combine real-time data access with advanced skip tracing technology to locate 
              consumers and businesses faster — and recover more. Every account placed with us undergoes automated skip tracing, 
              regardless of balance, and at no additional cost to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.background === 'grey' ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {section.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="order-2">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img 
                        src={section.image} 
                        alt={section.title}
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

      {/* Summary Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Maximize Contact Rates and Recovery Potential</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skip tracing isn't an afterthought — it's baked into every collection strategy we deploy. That's how Elite delivers 
              superior performance across even the toughest portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to improve your recovery metrics?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 