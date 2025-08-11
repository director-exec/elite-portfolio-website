import Image from 'next/image';

export default function PostChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'advanced-recovery',
      title: 'Advanced Recovery Solutions',
      description: 'When accounts go unpaid and age beyond internal efforts, Elite Portfolio Management delivers the experience, systems, and compliance infrastructure needed to convert them into revenue — while protecting your brand reputation every step of the way. Our post charge-off collections are powered by advanced analytics, multichannel communication, and fully compliant protocols.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'omnichannel-outreach',
      title: 'Omnichannel Contact Tools',
      description: 'Voice, SMS, email, and mail — tailored to consumer behavior and channel preference. Every decision is backed by data: segmentation, scoring, and behavioral tracking guide our workflows to optimize recovery. We train all agents to handle post-charge-off consumers with empathy, clarity, and professionalism.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-first',
      title: 'Compliance-First Process',
      description: 'FDCPA, FCRA, TCPA, GLBA, HIPAA — our internal legal oversight ensures full regulatory alignment at every stage. Whether you\'re a financial institution, healthcare provider, utility, or commercial business, our approach is designed to reduce friction and increase resolution — fast.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'proven-results',
      title: 'Proven Results',
      description: 'Our post charge-off collection programs consistently deliver superior recovery rates while maintaining the highest standards of compliance and customer service. We understand that every account represents a relationship that can be restored. With decades of results in regulated industries, we\'ve developed a refined, effective approach.',
      image: '/Pages/Calculator_Writing_Stats_Graph.jpeg',
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
          style={{ backgroundImage: 'url(/Pages/Writing_Signing_Doc_Meeting.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Post Charge-Off Collections</h1>
          <p className="text-xl">A Proven Model for Maximizing Recovery</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Advanced Recovery Solutions for Charged-Off Accounts</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              When accounts go unpaid and age beyond internal efforts, Elite Portfolio Management delivers the experience, 
              systems, and compliance infrastructure needed to convert them into revenue — while protecting your brand 
              reputation every step of the way.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">High-Impact Recovery for Delinquent Accounts</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our post charge-off collection programs consistently deliver superior recovery rates while maintaining 
              the highest standards of compliance and customer service. We understand that every account represents 
              a relationship that can be restored.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to maximize your recovery rates?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 