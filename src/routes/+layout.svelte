<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
  let { children } = $props();
	$effect(() => {
		theme.value;
	});
</script>

<svelte:head>
	<script>
		(function() {
			const theme = localStorage.getItem('yav-theme') || 'system';
			const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
			if (isDark) {
				document.documentElement.classList.add('dark');
			}
		})();
	</script>
</svelte:head>

<div class="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
	<Nav />
	<main class="flex-1">{@render children()}</main>
	<Footer />
</div>
