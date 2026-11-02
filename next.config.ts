import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/data-extraction",
        destination: "/services/data-extraction",
        permanent: true,
      },
      {
        source: "/data-extraction/:subslug",
        destination: "/services/data-extraction/:subslug",
        permanent: true,
      },
      {
        source: "/gp-surgeries",
        destination: "/services/gp-surgeries",
        permanent: true,
      },
      {
        source: "/gp-surgeries/:subslug",
        destination: "/services/gp-surgeries/:subslug",
        permanent: true,
      },
      {
        source: "/orthodontics",
        destination: "/services/orthodontics",
        permanent: true,
      },
      {
        source: "/other-work",
        destination: "/services/other-work",
        permanent: true,
      },
      {
        source: "/other-work/:subslug",
        destination: "/services/other-work/:subslug",
        permanent: true,
      },
      {
        source: "/services/document-intelligence",
        destination: "/services/data-extraction",
        permanent: true,
      },
      {
        source: "/services/voice-agents",
        destination: "/services/gp-surgeries/voice-agents",
        permanent: true,
      },
      {
        source: "/services/workflow-automation",
        destination: "/services/other-work",
        permanent: true,
      },
      {
        source: "/services/ai-audit",
        destination: "/how-we-work",
        permanent: true,
      },
      {
        source: "/products/docbox",
        destination: "/services/data-extraction/docbox",
        permanent: true,
      },
      {
        source: "/products/voice-agents",
        destination: "/services/gp-surgeries/voice-agents",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
