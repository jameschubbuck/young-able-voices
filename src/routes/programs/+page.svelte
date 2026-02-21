<script lang="ts">
	import { Hero, Container, Section, Heading, Button, FeatureCard } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';

	const programs = [
		{
			title: 'Weekly Chats',
			description: 'Weekly group video chats where you can share, listen, and connect with peers who understand.',
			href: `${base}/programs/weekly-chats`,
			icon: '💬'
		},
		{
			title: 'One-on-One Meetings',
			description: 'Individual support sessions for when you need personal attention and conversation.',
			href: `${base}/programs/one-on-one`,
			icon: '🤝'
		},
		{
			title: 'Specialized Chats',
			description: 'Condition-specific groups for Apraxia, Dyslexia, POTS, and more.',
			href: `${base}/programs/specialized`,
			icon: '🎯'
		}
	];
</script>

<svelte:head>
	<title>Programs - Young Able Voices</title>
	<meta name="description" content="Explore our programs: weekly chats, one-on-one meetings, and specialized support groups." />
</svelte:head>

<Hero title="Our Programs" subtitle="Find the support that's right for you" />

<Section>
	<Container>
		<p class="mb-12 text-center text-lg leading-relaxed text-foreground/80">
			Whether you want to join a group chat, meet one-on-one, or connect with others who share your specific
			condition, we have a program for you.
		</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each programs as program}
				<FeatureCard {...program} />
			{/each}
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Not Sure Where to Start?</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			Feel free to reach out! We'll help you find the right program for your needs.
		</p>
		<Button href="{base}/contact" class="mt-6"> Contact Us </Button>
	</Container>
</Section>
