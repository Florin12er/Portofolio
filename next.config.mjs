/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
export default withNextIntl(nextConfig);
