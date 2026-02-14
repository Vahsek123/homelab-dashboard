import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DynamicIcon } from '@/components/DynamicIcon';
import { ConfigItem } from '@/lib/types';

interface ServiceCardProps {
	item: ConfigItem;
}

export function ServiceCard({ item }: ServiceCardProps) {
	return (
		<a
			href={item.url}
			target="_blank"
			rel="noopener noreferrer"
			className="block h-full transition-all hover:-translate-y-1"
		>
			<Card className="h-full hover:border-primary/50 hover:shadow-md transition-all">
				<CardHeader className="flex flex-row items-center gap-4 pb-2 space-y-0">
					<div className="p-2 bg-muted rounded-md group-hover:bg-primary/10 transition-colors">
						<DynamicIcon name={item.icon} className="w-6 h-6 text-foreground/70" />
					</div>
					<div className="flex flex-col">
						<CardTitle className="text-base font-medium">{item.name}</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					{item.description && (
						<CardDescription className="line-clamp-2 text-xs">
							{item.description}
						</CardDescription>
					)}
				</CardContent>
			</Card>
		</a>
	);
}
