<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		lead?: boolean;
		muted?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { lead = false, muted = false, class: className = '', children, ...restProps }: Props = $props();
</script>

<p
	class={cn(
		'leading-relaxed',
		lead ? 'text-lg md:text-xl' : 'text-base',
		muted ? 'text-muted-foreground' : 'text-foreground/80',
		className
	)}
	{...restProps}
>
	{#if children}{@render children()}{/if}
</p>
