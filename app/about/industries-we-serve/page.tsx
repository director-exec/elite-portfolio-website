export default function IndustriesWeServePage() {
  const industrySections = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'From national banks to fintech lenders, we support institutions with intelligent, analytics-driven recovery strategies. Our systems integrate directly with your KPIs, enabling custom performance tracking and real-time insight. Whether managing high-volume portfolios or niche accounts, we operate with full FDCPA/FCRA compliance and strict consumer data safeguards.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'telecommunications',
      title: 'Telecommunications',
      description: 'Elite Portfolio has decades of experience supporting wireless, broadband, landline, satellite, and cable providers. Our tailored solutions optimize recovery without compromising brand equity. With a digital-first collections model, real-time analytics, and compliance-forward workflows, we manage every stage of your consumer or commercial receivables with discretion and precision.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Our patient-centered recovery model combines compassion with results. We help hospitals, physician groups, specialty care centers, insurers, and pharmacy networks manage receivables with dignity and professionalism. Every engagement is conducted with full HIPAA compliance and a focus on protecting patient privacy while accelerating recoveries. HIPAA Compliance is Non-Negotiable - we prioritize patient rights and data security at every touchpoint — no exceptions.',
      image: '/Pages/Legal_Doc_Med.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'utilities',
      title: 'Utilities',
      description: 'We support leading utility providers — gas, water, electric, and broadband — across regulated and deregulated markets. Whether residential or commercial, our life-cycle-based collections approach ensures early intervention, regulatory alignment, and minimal reputational risk. We also handle specialized accounts like equipment loss and property damage with care and accuracy.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'commercial-b2b',
      title: 'Commercial / B2B',
      description: 'For business-to-business collections, professionalism and discretion are everything. Elite Portfolio provides commercial receivables management across industries with an emphasis on protecting long-term business relationships. Our team understands the nuances of corporate debt recovery and customizes strategies to fit your operations without disrupting your reputation.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'education',
      title: 'Education',
      description: 'We help higher education institutions manage student account balances with compassion, care, and compliance. Our solutions are FERPA-aware and structured to maintain institutional image while empowering students to resolve their obligations. We work with public and private colleges, universities, and vocational institutions nationwide.',
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0d14?q=80&w=800&auto=format&fit=crop',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl">Experience. Precision. Performance — Tailored to Your Sector</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Specialized Solutions for Every Industry</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Elite Portfolio Management, we specialize in delivering results-driven collections strategies across a diverse range of industries. Our deep sector knowledge, regulatory expertise, and commitment to brand protection allow us to adapt our technology and processes to meet the specific needs of each client — all while maintaining full compliance and operational integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industrySections.map((section, index) => (
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Secure. Compliant. Proven.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're in healthcare or higher ed, telecom or government — Elite Portfolio Management is your trusted partner for compliant, high-performance recovery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to partner with a company that understands your industry?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 