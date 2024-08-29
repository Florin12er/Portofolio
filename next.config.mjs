/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
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
