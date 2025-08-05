import Link from 'next/link'

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Business Solutions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/solutions/pre-charge-off-collections" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Pre-Charge Off Collections</h2>
          <p className="text-gray-600">Early intervention strategies to prevent charge-offs.</p>
        </Link>
        
        <Link href="/solutions/post-charge-off-collections" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Post Charge-Off Collections</h2>
          <p className="text-gray-600">Recovery solutions for charged-off accounts.</p>
        </Link>
        
        <Link href="/solutions/secondary-tertiary-collections" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Secondary & Tertiary Collections</h2>
          <p className="text-gray-600">Specialized recovery for difficult accounts.</p>
        </Link>
        
        <Link href="/solutions/credit-bureau-reporting" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Credit Bureau Reporting</h2>
          <p className="text-gray-600">Compliant credit reporting services.</p>
        </Link>
        
        <Link href="/solutions/network-of-attorneys" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Network of Attorneys</h2>
          <p className="text-gray-600">Legal collection services nationwide.</p>
        </Link>
        
        <Link href="/solutions/skip-tracing" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Skip Tracing</h2>
          <p className="text-gray-600">Advanced location and contact services.</p>
        </Link>
        
        <Link href="/solutions/warehousing-management" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Warehousing Management</h2>
          <p className="text-gray-600">Portfolio management and optimization.</p>
        </Link>
      </div>
    </div>
  )
} 