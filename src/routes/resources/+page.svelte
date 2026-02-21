<script lang="ts">
	import { Hero, Container, Section, Heading, Button, Card } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import { base } from '$app/paths';

	const resources = [
		{
			title: 'My Speech Journey',
			description: "Follow Elina's personal journey with childhood apraxia of speech.",
			href: `${base}/resources/speech-journey`
		},
		{
			title: 'Apraxia Kids',
			description: 'Resources and information about childhood apraxia of speech.',
			url: 'https://www.apraxia-kids.org'
		},
		{
			title: 'Learning Disabilities Association of America',
			description: 'Support and resources for learning disabilities.',
			url: 'https://ldaamerica.org'
		},
		{
			title: 'Dysautonomia International',
			description: 'Information and support for POTS and dysautonomia.',
			url: 'https://dysautonomiainternational.org'
		},
		{
			title: 'Understood.org',
			description: 'Resources for learning and attention issues.',
			url: 'https://www.understood.org'
		},
		{
			title: 'Child Mind Institute',
			description: 'Mental health and learning disorder resources for families.',
			url: 'https://childmind.org'
		}
	];
</script>

<svelte:head>
	<title>Resources - Young Able Voices</title>
	<meta name="description" content="Helpful resources for kids with hidden disabilities and their families." />
</svelte:head>

<Hero title="Helpful Resources" subtitle="Information and support for your journey" />

<Section>
	<Container>
		<p class="mb-12 text-center text-lg leading-relaxed text-foreground/80">
			We've gathered these resources to help you learn more and find additional support. Have a resource to suggest?
			Let us know!
		</p>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each resources as resource}
				{#if resource.href}
					<a href={resource.href}>
						<Card hoverable class="h-full p-6">
							<h3 class="text-lg font-semibold">{resource.title}</h3>
							<p class="mt-2 text-sm text-muted-foreground">{resource.description}</p>
						</Card>
					</a>
				{:else if resource.url}
					<a href={resource.url} target="_blank" rel="noopener noreferrer">
						<Card hoverable class="h-full p-6">
							<h3 class="text-lg font-semibold">{resource.title}</h3>
							<p class="mt-2 text-sm text-muted-foreground">{resource.description}</p>
							<span class="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground">
								External link
								<ExternalLink class="h-3 w-3" />
							</span>
						</Card>
					</a>
				{/if}
			{/each}
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Have a Resource to Share?</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			We're always looking to expand our resource list. Let us know if there's something that helped you!
		</p>
		<Button href="{base}/contact" class="mt-6"> Suggest a Resource </Button>
	</Container>
</Section>
