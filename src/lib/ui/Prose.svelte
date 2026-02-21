<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { class: className = '', children, ...restProps }: Props = $props();
</script>

<div
	class={cn(
		'prose prose-lg max-w-none',
		'prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground',
		'prose-h2:mt-12 prose-h2:text-2xl',
		'prose-p:text-foreground/80 prose-p:leading-relaxed',
		'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
		'prose-strong:text-foreground',
		className
	)}
	{...restProps}
>
	{#if children}{@render children()}{/if}
</div>
