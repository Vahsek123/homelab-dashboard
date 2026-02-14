'use client';

import { useConfig } from '@/lib/config-provider';
import { ServiceCard } from './ServiceCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function Dashboard() {
	const { config, loading, error } = useConfig();
	const [search, setSearch] = useState('');

	if (loading) {
		return (
			<div className="space-y-8 animate-pulse">
				<div className="h-10 w-48 bg-muted rounded" />
				<div className="h-10 w-full max-w-sm bg-muted rounded" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<Skeleton key={i} className="h-32 w-full" />
					))}
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex flex-col items-center justify-center p-8 text-destructive border border-destructive/20 rounded-lg bg-destructive/10">
				<h2 className="text-lg font-semibold">Error Loading Configuration</h2>
				<p>{error}</p>
				<p className="text-sm mt-2 text-muted-foreground">
					Check if /config.json exists in the public directory.
				</p>
			</div>
		);
	}

	if (!config) return null;

	const filteredGroups = config.groups
		.map((group) => ({
			...group,
			items: group.items.filter(
				(item) =>
					item.name.toLowerCase().includes(search.toLowerCase()) ||
					item.description?.toLowerCase().includes(search.toLowerCase()),
			),
		}))
		.filter((group) => group.items.length > 0);

	return (
		<div className="space-y-8">
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
					{config.title}
				</h1>
				<div className="flex items-center gap-2 w-full md:w-auto">
					<div className="relative w-full max-w-sm">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search services..."
							className="pl-8"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<ModeToggle />
				</div>
			</div>

			{filteredGroups.length === 0 ? (
				<div className="text-center py-12 text-muted-foreground">
					No services found matching "{search}"
				</div>
			) : (
				filteredGroups.map((group) => (
					<section key={group.name} className="space-y-4">
						<h2 className="text-xl font-semibold text-muted-foreground border-b border-border/40 pb-2">
							{group.name}
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
							{group.items.map((item) => (
								<ServiceCard key={item.name} item={item} />
							))}
						</div>
					</section>
				))
			)}
		</div>
	);
}
