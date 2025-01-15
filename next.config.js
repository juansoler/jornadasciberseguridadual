/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: '/',
        destination: 'https://jornadasciberseguridad.ual.es/',
        permanent: true,
      },
    ];
  },
    // output: 'export',
    
    // // distDir: 'build',
    // // reactStrictMode: true,
    // // assetPrefix: '/public',
    // images: {
    //     // unoptimized : true,
    //     domains: ["localhost", "images.unsplash.com", "claudiovazquez.es", "doctorjuancarlosramos.web.app", "www.wundertraining.com"],
    //     remotePatterns: [
    //       {
    //         protocol: "https",
    //         hostname: "cdn.sanity.io",
    //         port: "",
    //       },
    //     ],
    //   },

    // // rewrites() {
    // //     return [
    // //       { source: '/docs/_next/:path*', destination: '/_next/:path*' }
    // //     ]
    // //   }

};

module.exports = nextConfig;

