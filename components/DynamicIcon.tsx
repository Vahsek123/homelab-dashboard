import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
	name: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const Icon = (Icons as any)[name];

	if (!Icon) {
		return <Icons.HelpCircle {...props} />;
	}

	return <Icon {...props} />;
};
