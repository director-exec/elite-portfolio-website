import PageLayout from '../../../components/PageLayout';

export default function WarehousingManagementPage() {
  const serviceSections = [
    {
      id: 'keep-cash-flow',
      title: 'Keep Your Cash Flow Coming',
      description: 'Elite Portfolio will manage your \'end of life\' accounts at a reduced fee. Our proprietary scoring, analytics, and skip tracing processes help you maximize recovery and keep cash flow coming on accounts where the statute of limitations has not expired. We monitor multiple databases around the clock for favorable recovery opportunities.',
      image: 'https://images.pexels.com/photos/8111877/pexels-photo-8111877.jpeg?_gl=1*21l4jz*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzM2OTIkbzMkZzAkdDE3NTQ5MzM2OTIkajYwJGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'secure-data-holding',
      title: 'Secure Data Holding',
      description: 'We retain and monitor accounts that are past standard collection efforts, while ensuring full compliance with data retention laws. Our system scans multiple national databases continuously to detect credit activity, employment updates, asset shifts, or other signs of renewed collectability.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'proprietary-scoring',
      title: 'Proprietary Scoring & Analytics',
      description: 'We re-score and prioritize accounts based on updated financial behavior, payment capacity, and risk indicators. Warehoused accounts are held at lower servicing rates, with full recovery efforts only reinitiated when there\'s true potential to collect.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'cost-effective-strategy',
      title: 'Cost-Effective Strategy',
      description: 'Extend recovery timelines without legal risk, increase total lifetime ROI on each account, avoid premature closures or write-offs, and free up internal resources while we monitor and manage. Accounts nearing the statute of limitations still have value — if you manage them correctly.',
      image: 'https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=800',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Warehousing Management</h1>
          <p className="text-xl">Keep Your Cash Flow Coming</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Increase Your Revenue Stream</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Elite Portfolio will manage your 'end of life' accounts at a reduced fee. Our proprietary scoring, analytics, 
              and skip tracing processes help you maximize recovery and keep cash flow coming on accounts where the statute 
              of limitations has not expired.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Don't Write Off Accounts Too Soon</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Accounts nearing the statute of limitations still have value — if you manage them correctly. Let Elite Portfolio 
              help you track and recover them with minimal cost and maximum timing precision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to maximize your recovery potential?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 