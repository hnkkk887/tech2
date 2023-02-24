/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["eur", "gbr"],
    defaultLocale: "eur"
  }
}

module.exports = nextConfig;