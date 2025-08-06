export default function CompliancePage() {
  const complianceSections = [
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance',
      description: 'Elite strictly adheres to all applicable statutes and regulations, including Fair Debt Collection Practices Act (FDCPA), Fair Credit Reporting Act (FCRA), Gramm-Leach-Bliley Act (GLBA), Health Insurance Portability and Accountability Act (HIPAA), Privacy Act of 1974, Protected Health Information (PHI) protocols, and any other relevant state or federal statutes. We continuously align with evolving compliance frameworks to ensure that both our clients and their consumers are protected at all times.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'regulatory-change',
      title: 'Staying Ahead of Regulatory Change',
      description: 'Compliance is not static. That\'s why our in-house Corporate Counsel and Chief Compliance Officer maintain continuous oversight of legal and regulatory developments across the country. We proactively update policies and procedures to reflect new legislation and guidance, ensuring that your accounts are always handled in a legally sound and fully transparent manner.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'technology-compliance',
      title: 'Technology-Driven Compliance',
      description: 'Our digital-first compliance infrastructure integrates people, processes, and tools to maintain airtight controls at every level. We implement TCPA-compliant systems, maintain PCI DSS certification, conduct annual CFPB Readiness Assessments, and practice proactive data protection and encryption. Our systems are routinely audited by some of the nation\'s most demanding institutional clients — and we deliver exceptional results, every time.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'staff-standards',
      title: 'Industry-Leading Staff Standards',
      description: 'We take hiring as seriously as we take compliance. Every team member undergoes extensive screening, background checks, and drug testing before onboarding. Once onboarded, employees complete a rigorous training program, followed by ongoing compliance education and performance audits throughout their tenure.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'call-monitoring',
      title: 'Call Recording, Monitoring & Analytics',
      description: 'Every inbound and outbound call is recorded, archived, and subject to real-time call monitoring by Elite\'s QA leadership, access to live call sessions for client-side monitoring, and full post-call analysis and audit trails. This ensures our agents are not only compliant, but delivering high-quality, professional experiences at every touchpoint.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'complaint-management',
      title: 'Complaint Management',
      description: 'We operate with zero tolerance for consumer mistreatment or process failure. All complaints are investigated immediately by our Corporate Counsel and Compliance Officer, and are tracked, analyzed, and resolved through a formal compliance lifecycle including written complaint procedures, active monitoring and reporting, root-cause analysis and corrective action, and transparent resolution and reporting. At Elite Portfolio Management, we protect your brand like it\'s our own — because compliance isn\'t just protection, it\'s power.',
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Compliance</h1>
          <p className="text-xl">We Don't Just Meet Standards — We Set Them</p>
        </div>
      </section>

      {/* Compliance Sections */}
      {complianceSections.map((section, index) => (
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
            Ready to partner with a company that prioritizes compliance and regulatory excellence?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 