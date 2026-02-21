<script lang="ts">
	import { Hero, Container, Section, Heading, Button, FeatureCard } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';

	const specializedGroups = [
		{
			title: 'Apraxia Weekly Chats',
			description: 'For kids with childhood apraxia of speech (CAS) to connect and share experiences.',
			href: `${base}/programs/specialized/apraxia`,
			icon: '🗣️'
		},
		{
			title: 'Dyslexia Support',
			description: 'Connect with others navigating reading and learning differences.',
			href: `${base}/programs/specialized/dyslexia`,
			icon: '📚'
		},
		{
			title: 'POTS & Dysautonomia',
			description: 'Support for kids dealing with POTS and related conditions.',
			href: `${base}/programs/specialized/pots`,
			icon: '💜'
		}
	];
</script>

<svelte:head>
	<title>Specialized Chats - Young Able Voices</title>
	<meta name="description" content="Condition-specific support groups for Apraxia, Dyslexia, POTS, and more." />
</svelte:head>

<Hero title="Specialized Chats" subtitle="Connect with others who share your specific challenges" />

<Section>
	<Container>
		<p class="mb-12 text-center text-lg leading-relaxed text-foreground/80">
			Our specialized chats bring together kids with specific conditions. These focused groups allow for deeper
			connections and more targeted support.
		</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each specializedGroups as group}
				<FeatureCard {...group} />
			{/each}
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Don't See Your Condition?</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			We're always looking to expand our programs! Let us know if there's a specific condition you'd like support
			for.
		</p>
		<Button href="{base}/contact" class="mt-6"> Suggest a Group </Button>
	</Container>
</Section>
