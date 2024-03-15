/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['oaidalleapiprodscus.blob.core.windows.net'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
