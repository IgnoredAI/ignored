const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compress: true,
  webpack(config, { isServer }) {
    config.cache = {
      type: 'filesystem', 
      buildDependencies: {
        config: [__filename], 
      },
      compression: 'brotli', 
      maxAge: 1000 * 60 * 60 * 24 * 7, 
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, 
      };
    }

    return config;
  },
});
