/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 75, 90],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
  async redirects() {
    return [
      {
        source: "/KBR_prime",
        destination: "/kbr-prime",
        permanent: true,
      },
      {
        source: "/thank-you",
        destination: "/kbr-prime/thank-you",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
