<script lang="ts">
	import { Hero, Container, Section, Prose } from '$lib/ui';
	let { children } = $props();
</script>

<svelte:head>
	<title>My Speech Journey - Young Able Voices</title>
	<meta name="description" content="Follow Elina's personal journey with childhood apraxia of speech." />
</svelte:head>

<Hero title="My Speech Journey" subtitle="A personal story of perseverance and growth" />

<Section>
	<Container size="sm">
		<Prose>
			{@render children()}
		</Prose>
	</Container>
</Section>
