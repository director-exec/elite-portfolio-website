import Link from 'next/link'

export default function AboutPage() {
  const aboutSections = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      description: 'At Elite Portfolio Management, we resolve financial obligations with professionalism, discretion, and respect.\n\nWe specialize in compliant, results-driven account resolution, delivering real outcomes for our partners while offering consumers a clear, accessible path forward.\n\nElite Portfolio Management leverages the latest technology and advanced platforms to streamline operations, enhance communication, and provide more effective solutions for both clients and consumers. This modern approach allows us to operate with greater precision, transparency, and agility in today\'s dynamic financial landscape.',
      image: '/Pages/Board_Meeting_Consult_Building.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-we-stand-for',
      title: 'What We Stand For',
      description: 'We treat your brand as an extension of our own. Every touchpoint reflects our dedication to preserving your reputation, communicating with empathy, and aligning our operations with your values. Whether we\'re recovering past-due balances or handling sensitive account situations, we work as silent stewards of your public image.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'how-we-operate',
      title: 'How We Operate',
      description: 'Respect, empathy, and compliance guide everything we do. Every consumer interaction is conducted with professionalism and clarity. Our agents are trained not only in regulation — but in tone, timing, and approach. We uphold a "resolution mindset" in all conversations, helping consumers resolve obligations with dignity.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'our-people',
      title: 'Our People',
      description: 'Our team is our power. We hire experienced professionals who thrive in a culture of integrity, collaboration, and continuous improvement. Every team member undergoes rigorous training and performance auditing — not just to maintain standards, but to raise them. At Elite, excellence is a shared expectation.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'how-we-deliver',
      title: 'How We Deliver',
      description: 'We succeed by listening. Every client has unique KPIs, operational nuances, and brand sensitivities. We tailor each engagement to align with those needs while delivering clear, measurable recovery results. Whether early-stage outreach or complex portfolio management, our mission is to maximize returns while minimizing risk.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'where-we-work',
      title: 'Where We Work',
      description: 'Elite Portfolio Management is licensed, bonded, and fully operational in all 50 U.S. states. We maintain Certificates of Authority, statutory bonds, trust accounts, and resident office requirements in every jurisdiction where applicable law demands it. Your nationwide presence is supported by ours.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    }
  ]

  const additionalSections = [
    {
      id: 'security',
      title: 'Security',
      description: 'Learn about our comprehensive security protocols and data protection measures.',
      link: '/about/security'
    },
    {
      id: 'compliance',
      title: 'Compliance',
      description: 'Discover how we maintain the highest standards of regulatory compliance under the TCPA, Telephone Consumer Protection Act.',
      link: '/about/compliance'
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      description: 'Explore the diverse industries we support with specialized solutions.',
      link: '/about/industries-we-serve'
    },
    {
      id: 'community',
      title: 'Community Involvement',
      description: 'See how we give back to the communities we serve.',
      link: '/about/community-involvement'
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
          <h1 className="text-5xl font-bold mb-4">Precision Meets Resolution</h1>
          <p className="text-xl">A Digital Approach to Strategic Outcomes</p>
        </div>
      </section>

      {/* About Sections */}
      {aboutSections.map((section, index) => (
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
                        className="w-full h-80 object-cover rounded-lg shadow-xl"
                      />
                    </div>
                    <div className="order-2">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.description}
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-80 object-cover rounded-lg shadow-xl"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Sections Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Learn More About Elite Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSections.map((section) => (
                <Link key={section.id} href={section.link} className="block">
                  <div className="bg-gray-50 rounded-lg p-6 h-full shadow-2xl hover:shadow-2xl transition-shadow duration-300" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to partner with a company that values integrity, compliance, and results?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
} 