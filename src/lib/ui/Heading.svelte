<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		size?: 'sm' | 'default' | 'lg' | 'xl';
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { size = 'default', class: className = '', children, ...restProps }: Props = $props();

	const sizes = {
		sm: 'text-xl',
		default: 'text-2xl md:text-3xl',
		lg: 'text-3xl md:text-4xl',
		xl: 'text-4xl md:text-5xl'
	};
</script>

<h2 class={cn('font-bold tracking-tight', sizes[size], className)} {...restProps}>
	{#if children}{@render children()}{/if}
</h2>
