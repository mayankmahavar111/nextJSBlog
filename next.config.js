
const securityHeader  =[
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'sameorigin'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  
];

module.exports = {
  reactStrictMode: true,
  source: '*/path',
  headers : securityHeader,
  images : {
    domains :[
      'www.tatahealth.com',
      'www.determinantstudios.com'
    ]
  }
}
