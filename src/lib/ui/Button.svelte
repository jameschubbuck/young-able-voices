<script lang="ts">
	import Button from '$lib/components/ui/button/index.svelte';

	type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
	type Size = 'default' | 'sm' | 'lg' | 'icon';

	interface Props {
		variant?: Variant;
		size?: Size;
		href?: string;
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { variant = 'default', size = 'default', href, class: className, children, ...restProps }: Props = $props();
</script>

<Button {variant} {size} {href} class={className} {...restProps}>
	{#if children}{@render children()}{/if}
</Button>
