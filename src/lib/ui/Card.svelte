<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		hoverable?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { hoverable = false, class: className = '', children, ...restProps }: Props = $props();

	let hoverClasses = $derived(
		hoverable ? 'hover:bg-muted cursor-pointer transition-colors' : ''
	);

	let classes = $derived(cn(hoverClasses, className));
</script>

<Card class={classes} {...restProps}>
	{#if children}{@render children()}{/if}
</Card>
