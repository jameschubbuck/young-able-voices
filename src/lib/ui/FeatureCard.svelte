<script lang="ts">
	import Card from './Card.svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	interface Props {
		title: string;
		description: string;
		href: string;
		icon?: string;
	}

	let { title, description, href, icon }: Props = $props();
</script>

<a href={href}>
	<Card hoverable class="group h-full p-6">
		{#if icon}
			<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-2xl transition-colors group-hover:bg-accent-foreground/10">
				{icon}
			</div>
		{/if}
		<h3 class="text-lg font-semibold transition-colors group-hover:text-accent-foreground">
			{title}
		</h3>
		<p class="mt-2 text-sm text-muted-foreground">
			{description}
		</p>
		<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent-foreground">
			Learn more
			<ArrowRight class="h-4 w-4" />
		</span>
	</Card>
</a>
