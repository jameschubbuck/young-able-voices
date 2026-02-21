<script lang="ts">
	import { Hero, Container, Section, Heading, MediaCard } from '$lib/ui';
	import mediaData from '$lib/data/media.json';
</script>

<svelte:head>
	<title>Media & Press - Young Able Voices</title>
	<meta name="description" content="Articles, podcasts, and media featuring Young Able Voices." />
</svelte:head>

<Hero title="Media & Press" subtitle="Stories about Young Able Voices" />

<Section>
	<Container>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each mediaData.all as item}
				<MediaCard
					title={item.title}
					source={item.source}
					url={item.url}
					type={item.type as 'article' | 'podcast' | 'video'}
				/>
			{/each}
		</div>
	</Container>
</Section>
