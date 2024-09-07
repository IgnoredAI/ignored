const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  compress: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.cache = {
        type: 'filesystem', 
        buildDependencies: {
          config: [__filename], 
        },
        compression: 'brotli', 
        maxAge: 1000 * 60 * 60 * 24 * 7, 
      };

      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
});

