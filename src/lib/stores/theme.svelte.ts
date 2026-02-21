import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

const THEME_KEY = 'yav-theme';

function getSystemTheme(): 'light' | 'dark' {
	if (!browser) return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): Theme {
	if (!browser) return 'system';
	return (localStorage.getItem(THEME_KEY) as Theme) || 'system';
}

function applyTheme(theme: 'light' | 'dark') {
	if (!browser) return;
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add(theme);
}

class ThemeStore {
	value = $state<Theme>(getStoredTheme());
	resolved = $state<'light' | 'dark'>('light');

	constructor() {
		if (browser) {
			this.resolved = this.value === 'system' ? getSystemTheme() : this.value;
			applyTheme(this.resolved);

			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
				if (this.value === 'system') {
					this.resolved = e.matches ? 'dark' : 'light';
					applyTheme(this.resolved);
				}
			});
		}
	}

	set(theme: Theme) {
		this.value = theme;
		if (browser) {
			localStorage.setItem(THEME_KEY, theme);
		}
		this.resolved = theme === 'system' ? getSystemTheme() : theme;
		applyTheme(this.resolved);
	}

	toggle() {
		const next = this.resolved === 'light' ? 'dark' : 'light';
		this.set(next);
	}
}

export const theme = new ThemeStore();
