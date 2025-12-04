/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Explicitly NOT using static export - server rendering required
    // output: 'export' - DISABLED
    images: {
        unoptimized: true
    }
};

export default nextConfig;