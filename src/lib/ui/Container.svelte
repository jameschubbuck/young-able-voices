<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		size?: 'default' | 'sm' | 'lg';
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { size = 'default', class: className = '', children, ...restProps }: Props = $props();

	const sizes = {
		sm: 'max-w-2xl',
		default: 'max-w-6xl',
		lg: 'max-w-7xl'
	};
</script>

<div class={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)} {...restProps}>
	{#if children}{@render children()}{/if}
</div>
