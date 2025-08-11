export default function SecurityPage() {
  const securitySections = [
    {
      id: 'data-protection',
      title: 'Data Protection & Encryption',
      description: 'At Elite Portfolio Management, safeguarding data isn\'t just a priority — it\'s embedded in our DNA. We understand the critical importance of protecting both your information and your customers\' data at every level. Our track record is spotless — zero data breaches — and our infrastructure is built to meet and exceed today\'s most stringent security and compliance standards.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'security-protocols',
      title: 'Security Protocols & Infrastructure',
      description: 'We implement continuously updated, transparent security protocols that leverage the latest in encryption, secure storage, and controlled access systems. From responsible document disposal to fully secured digital and physical environments, every detail is accounted for — including a comprehensive disaster recovery plan to ensure continuity under any circumstances.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-standards',
      title: 'Compliance & Regulatory Alignment',
      description: 'No matter your industry, you can trust Elite Portfolio to deliver collections support with the highest level of data protection and regulatory alignment. Because in a digital-first world, security isn\'t an option — it\'s our obligation. We maintain rigorous compliance with all federal and state regulations while implementing industry best practices for data security.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Pages/Stamp_Doc.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Security</h1>
          <p className="text-xl">Security Is the Foundation of Our Operations</p>
        </div>
      </section>

      {/* Security Sections */}
      {securitySections.map((section, index) => (
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

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to partner with a company that prioritizes security and compliance?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 