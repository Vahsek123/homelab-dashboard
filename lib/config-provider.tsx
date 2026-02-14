'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppConfig } from '@/lib/types';

interface ConfigContextType {
	config: AppConfig | null;
	loading: boolean;
	error: string | null;
}

const ConfigContext = createContext<ConfigContextType>({
	config: null,
	loading: true,
	error: null,
});

export function useConfig() {
	return useContext(ConfigContext);
}

export function ConfigProvider({ children }: { children: React.ReactNode }) {
	const [config, setConfig] = useState<AppConfig | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch('/config.json')
			.then((res) => {
				if (!res.ok) throw new Error('Failed to load config');
				return res.json();
			})
			.then((data) => {
				setConfig(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error loading config:', err);
				setError(err.message);
				setLoading(false);
			});
	}, []);

	return (
		<ConfigContext.Provider value={{ config, loading, error }}>
			{children}
		</ConfigContext.Provider>
	);
}
