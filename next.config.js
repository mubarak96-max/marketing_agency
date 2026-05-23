/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/mubarak-mutesasira',
        destination: '/mubarak-mutesasira-web-designer-in-uganda',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
