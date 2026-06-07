/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdnjs.cloudflare.com'],
  },
  async redirects() {
    return [
      // Short URL used in the VOD notice ({{dispute_link}}). Query params (?ref=)
      // pass through automatically to the full dispute/response page.
      {
        source: '/respond',
        destination: '/consumer-tools/request-account-validation',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 