import Link from 'next/link'

export default function SolutionsPage() {
  const serviceSections = [
    {
      id: 'pre-collection',
      title: 'Pre-Charge Off Collections',
      description: 'Early intervention strategies to prevent charge-offs and maximize recovery potential. Our proactive approach helps clients maintain account relationships while maximizing recovery rates through strategic communication and payment arrangements.',
      image: 'https://images.pexels.com/photos/7433837/pexels-photo-7433837.jpeg',
      link: '/solutions/pre-charge-off-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'post-charge-off',
      title: 'Post Charge-Off Collections',
      description: 'Recovery solutions for charged-off accounts with proven results. We specialize in recovering balances from accounts that have been written off using advanced strategic collection techniques.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      link: '/solutions/post-charge-off-collections',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'secondary-tertiary',
      title: 'Secondary & Tertiary Collections',
      description: 'Specialized recovery for difficult accounts requiring advanced strategies. Our experienced team handles accounts that have been through multiple collection attempts, using innovative approaches to locate and engage debtors.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      link: '/solutions/secondary-tertiary-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'warehousing',
      title: 'Warehousing Management',
      description: 'Portfolio management and optimization for maximum recovery efficiency. We provide comprehensive portfolio analysis, segmentation, and strategic management to maximize your recovery potential while minimizing operational costs.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      link: '/solutions/warehousing-management',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'network-attorneys',
      title: 'Network of Attorneys',
      description: 'Legal collection services nationwide with experienced legal professionals. Our network of licensed attorneys provides legal collection services across all 50 states, ensuring compliance with state-specific regulations and maximizing recovery through legal channels.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
      link: '/solutions/network-of-attorneys',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'reporting',
      title: 'Reporting Services',
      description: 'Comprehensive reporting and analytics for portfolio performance tracking. We provide detailed reporting on collection activities, recovery rates, and portfolio performance to help you make informed business decisions.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      link: '/solutions/credit-bureau-reporting',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'credit-bureau',
      title: 'Credit Bureau Reporting',
      description: 'As part of our full service recovery solutions. Elite Portfolio Management\'s network offers optional credit bureau reporting to enhance your collection strategy. We handle every file with full adherence to the Fair Credit Reporting Act (FCRFA) and all the applicable regulations. Our network will report only with your authorization.',
      image: 'https://media.istockphoto.com/id/955988522/photo/business-signing-a-contract-buy-sell-house.jpg?b=1&s=612x612&w=0&k=20&c=EET9rlkAU1PTC_BWtJNfSWZfpvnCYLct0IkE4uZvb5k=',
      link: '/solutions/credit-bureau-reporting',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Business Solutions</h1>
          <p className="text-xl">Comprehensive recovery solutions designed to maximize your returns while protecting your brand reputation.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Recovery Solutions That Work</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Elite Portfolio Management delivers proven recovery solutions across all stages of the collection process. 
              Our comprehensive suite of services combines advanced technology, regulatory expertise, and human empathy 
              to achieve superior results while maintaining the highest standards of compliance and professionalism.
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
                      <div className="text-lg text-gray-700 leading-relaxed mb-6">
                        {section.description}
                      </div>
                      <Link href={section.link} className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed mb-6">
                        {section.description}
                      </div>
                      <Link href={section.link} className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
                        Learn More
                      </Link>
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
            Contact Elite Portfolio Management for a secure solution to your collection needs.
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
} 