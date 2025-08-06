import Image from 'next/image';

export default function SecondaryTertiaryCollectionsPage() {
  const serviceSections = [
    {
      id: 'specialized-recovery',
      title: 'Specialized Recovery for Difficult Accounts',
      description: 'When accounts have been through multiple collection attempts without resolution, they require a specialized approach. Elite Portfolio Management\'s Secondary & Tertiary Collections services are designed specifically for these challenging cases that demand advanced strategies and experienced handling. Our team brings decades of experience in handling complex collection scenarios.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'advanced-skip-tracing',
      title: 'Advanced Skip Tracing',
      description: 'Utilizing cutting-edge technology and databases to locate hard-to-find consumers. Our specialized approach is ideal for accounts that have been through multiple collection attempts, require specialized legal or regulatory handling, involve complex consumer situations, or need advanced location and contact services.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'specialized-communication',
      title: 'Specialized Communication Strategies',
      description: 'Customized approaches based on account history and consumer behavior patterns. We provide access to specialized legal resources for complex regulatory and compliance matters, and creative payment arrangements tailored to individual consumer circumstances.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'flexible-solutions',
      title: 'Flexible Payment Solutions',
      description: 'Creative payment arrangements tailored to individual consumer circumstances. Our specialized services provide recovery of previously uncollectible accounts, specialized handling of complex cases, advanced location and contact services, expert legal and compliance support, and customized payment arrangements.',
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
          <h1 className="text-5xl font-bold mb-4">Secondary & Tertiary Collections</h1>
          <p className="text-xl">Specialized Recovery for Difficult Accounts</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Advanced Solutions for Accounts That Require Specialized Handling</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              When accounts have been through multiple collection attempts without resolution, they require a 
              specialized approach. Elite Portfolio Management's Secondary & Tertiary Collections services are 
              designed specifically for these challenging cases that demand advanced strategies and experienced handling.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">When Standard Collections Aren't Enough</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Some accounts require more than standard collection approaches. Our Secondary & Tertiary Collections 
              services provide the specialized expertise and advanced strategies needed to recover accounts that 
              have resisted traditional collection efforts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready for specialized collection solutions?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 