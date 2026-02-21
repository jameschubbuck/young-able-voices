<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Background = 'default' | 'muted' | 'primary' | 'accent';

	interface Props {
		background?: Background;
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { background = 'default', class: className = '', children, ...restProps }: Props = $props();

	const backgrounds: Record<Background, string> = {
		default: 'bg-background',
		muted: 'bg-muted',
		primary: 'bg-primary text-primary-foreground',
		accent: 'bg-accent/10'
	};
</script>

<section class={cn('py-16 md:py-24', backgrounds[background], className)} {...restProps}>
	{#if children}{@render children()}{/if}
</section>
