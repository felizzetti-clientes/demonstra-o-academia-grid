import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // As fotos originais têm ~900 px de largura: não gerar variantes maiores que o necessário.
    deviceSizes: [480, 640, 828, 1080, 1280, 1920],
    imageSizes: [96, 256, 384],
    qualities: [75, 85, 90],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Protótipo privado: reforça o noindex também no cabeçalho HTTP.
          ...(process.env.NEXT_PUBLIC_INDEXAR === "true"
            ? []
            : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
