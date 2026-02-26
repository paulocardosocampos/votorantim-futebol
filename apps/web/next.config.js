/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@votorantim-futebol/database"],
    output: 'standalone', // Necessário para o Docker build (Railway)
};

module.exports = nextConfig;
