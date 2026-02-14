export interface ConfigItem {
	name: string;
	url: string;
	icon: string;
	description?: string;
}

export interface ConfigGroup {
	name: string;
	items: ConfigItem[];
}

export interface AppConfig {
	title: string;
	groups: ConfigGroup[];
}
