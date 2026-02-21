<script lang="ts">
	import { theme } from '$lib/stores/theme.svelte';
	import Button from '$lib/components/ui/button/index.svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	let { class: className = '' }: { class?: string } = $props();
</script>

<Button variant="outline" size="icon" onclick={() => theme.toggle()} class={className} aria-label="Toggle theme">
	{#if theme.resolved === 'dark'}
		<Sun class="h-4 w-4" />
	{:else}
		<Moon class="h-4 w-4" />
	{/if}
</Button>
