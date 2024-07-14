// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

export const webpack = (config, { isServer }) => {
  if (!isServer) {
    config.resolve.fallback.fs = false;
  }
  return config;
};

export const typescript = {
  // Specify any custom TypeScript options here
};
