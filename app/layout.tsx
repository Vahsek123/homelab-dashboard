import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // keeping existing fonts
import './globals.css';
import { ConfigProvider } from '@/lib/config-provider';
import { ThemeProvider } from '@/components/theme-provider'; 

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Homelab Dashboard',
	description: 'Internal services dashboard',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ConfigProvider>{children}</ConfigProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
