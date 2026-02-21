<script lang="ts">
	import Card from './Card.svelte';
	import Newspaper from 'lucide-svelte/icons/newspaper';
	import Mic from 'lucide-svelte/icons/mic';
	import Video from 'lucide-svelte/icons/video';

	type MediaType = 'article' | 'podcast' | 'video';

	interface Props {
		title: string;
		description?: string;
		source?: string;
		url?: string;
		type?: MediaType;
	}

	let { title, description, source, url, type = 'article' }: Props = $props();

	const typeConfig: Record<MediaType, { label: string }> = {
		article: { label: 'Article' },
		podcast: { label: 'Podcast' },
		video: { label: 'Video' }
	};

	let config = $derived(typeConfig[type]);
</script>

{#if url}
	<a href={url} target="_blank" rel="noopener noreferrer">
		<Card hoverable class="h-full p-5">
			<div class="mb-2 flex items-center gap-2">
				{#if type === 'article'}
					<Newspaper class="h-4 w-4 text-muted-foreground" />
				{:else if type === 'podcast'}
					<Mic class="h-4 w-4 text-muted-foreground" />
				{:else}
					<Video class="h-4 w-4 text-muted-foreground" />
				{/if}
				<span class="text-xs font-medium uppercase tracking-wider text-muted-foreground">{config.label}</span>
			</div>
			<h4 class="font-semibold">{title}</h4>
			{#if source}
				<p class="text-sm text-muted-foreground">{source}</p>
			{/if}
			{#if description}
				<p class="mt-2 text-sm text-muted-foreground">{description}</p>
			{/if}
		</Card>
	</a>
{:else}
	<Card class="h-full p-5">
		<div class="mb-2 flex items-center gap-2">
			{#if type === 'article'}
				<Newspaper class="h-4 w-4 text-muted-foreground" />
			{:else if type === 'podcast'}
				<Mic class="h-4 w-4 text-muted-foreground" />
			{:else}
				<Video class="h-4 w-4 text-muted-foreground" />
			{/if}
			<span class="text-xs font-medium uppercase tracking-wider text-muted-foreground">{config.label}</span>
		</div>
		<h4 class="font-semibold">{title}</h4>
		{#if source}
			<p class="text-sm text-muted-foreground">{source}</p>
		{/if}
		{#if description}
			<p class="mt-2 text-sm text-muted-foreground">{description}</p>
		{/if}
	</Card>
{/if}
