import Image from 'next/image';

export default function PreChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'early-intervention',
      title: 'Early Intervention Strategy',
      description: 'Our pre-collection approach focuses on proactive, respectful outreach for accounts that are slightly past due — long before charge-off or full collection becomes necessary. These accounts don\'t need pressure. They need a nudge — and that\'s exactly what we provide through strategic early-stage contact, powered by sophisticated analytics and handled with a brand-protective approach.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'customized-outreach',
      title: 'Customized Outreach Plans',
      description: 'Tailored to your business model, risk tolerance, and account timelines. Our contact methods prioritize your company\'s image, focusing on clarity, professionalism, and empathy. Every message and method is FDCPA-compliant and aligned with industry-specific requirements.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'analytics-driven',
      title: 'Analytics-Driven Strategy',
      description: 'We use early-stage scoring models and behavioral data to prioritize accounts and determine best contact methods. Our systems integrate directly with your KPIs, enabling custom performance tracking and real-time insight. Whether managing high-volume portfolios or niche accounts, we operate with full FDCPA/FCRA compliance and strict consumer data safeguards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'business-benefits',
      title: 'Business Benefits',
      description: 'Prevent escalation to full collections, preserve customer relationships, improve recovery rates on early-stage delinquencies, maintain a professional and compliant outreach tone, and lower long-term collection costs by up to 80%. Our pre-collection programs are designed to restore account standing quickly — before costly charge-offs, disputes, or legal action take hold.',
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
          <h1 className="text-5xl font-bold mb-4">Pre-Collection Services</h1>
          <p className="text-xl">Sometimes Early Intervention Is All It Takes</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Resolve More. Sooner. Smarter.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Elite Portfolio Management, we understand that the earlier you engage a delinquent account, 
              the better the chances of resolution. Our Pre-Collection Services focus on proactive, 
              respectful outreach for accounts that are slightly past due — long before charge-off or full 
              collection becomes necessary.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Solve It Before It Escalates</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                The earlier you act, the greater your results. Our pre-collection programs are designed to restore 
                account standing quickly — before costly charge-offs, disputes, or legal action take hold.
              </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to partner with a company that understands early intervention?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
      </div>
      </section>
    </>
  )
} 