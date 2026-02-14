'use client';

import { Dashboard } from '@/components/dashboard/Dashboard';

export default function Home() {
	return (
		<main className="min-h-screen p-8 md:p-12 lg:p-16 bg-background">
			<div className="max-w-7xl mx-auto">
				<Dashboard />
			</div>
		</main>
	);
}
