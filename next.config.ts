import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	// trailingSlash: true,
	// Optional: Prevent automatic /me -> /me/, useful if your webserver config is tricky
	// skipTrailingSlashRedirect: true,
	// DistDir: 'out',
	images: {
		unoptimized: true, // Required for static export
	},
};

export default nextConfig;
