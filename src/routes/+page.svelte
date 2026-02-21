<script lang="ts">
	import { Hero, Container, Section, Heading, Button, FeatureCard } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import Newspaper from 'lucide-svelte/icons/newspaper';
	import Mic from 'lucide-svelte/icons/mic';
	import Video from 'lucide-svelte/icons/video';
	import mediaData from '$lib/data/media.json';
	import { base } from '$app/paths';

	const programs = [
		{
			title: 'Weekly Chats',
			description: 'Join weekly video chats with peers facing similar challenges. Share, listen, and connect.',
			href: `${base}/programs/weekly-chats`,
			icon: '💬'
		},
		{
			title: 'One-on-One Meetings',
			description: 'Personal support sessions for when you need individual attention.',
			href: `${base}/programs/one-on-one`,
			icon: '🤝'
		},
		{
			title: 'Specialized Chats',
			description: 'Focused groups for specific conditions like Apraxia, Dyslexia, and POTS.',
			href: `${base}/programs/specialized`,
			icon: '🎯'
		}
	];
</script>

<svelte:head>
	<title>Young Able Voices - A Safe Place for Kids with Hidden Disabilities</title>
	<meta name="description" content="Peer support for children with hidden disabilities through weekly chats, one-on-one meetings, and specialized programs." />
</svelte:head>

<Hero
	title="A safe place for kids with hidden disabilities to connect, and know they aren't alone."
	subtitle="Your future is bright."
/>

<Section>
	<Container size="sm">
		<div class="text-center">
			<Heading>What We Do</Heading>
			<div class="mt-6 space-y-4">
				<p class="text-lg leading-relaxed text-foreground/80">
					At Young Able Voices, children with hidden disabilities have the opportunity to join weekly chats to talk
					with others facing similar challenges. Each week we post a specific video to get the chat rolling.
				</p>
				<p class="leading-relaxed text-foreground/80">
					Please understand that this is a peer-to-peer support group. We are not therapists, but we're here to
					share helpful suggestions, tips, and tricks in navigating daily life.
				</p>
			</div>
			<Button href="{base}/contact" size="lg" class="mt-8">
				Join Us
			</Button>
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container>
		<Heading class="mb-12 text-center">Our Programs</Heading>
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
		<Heading>Featured In</Heading>
		<p class="mt-4 leading-relaxed text-muted-foreground">
			Young Able Voices has been recognized by these organizations
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			{#each mediaData.featured as item}
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
				>
					{#if item.icon === 'video'}
						<Video class="h-4 w-4" />
					{:else if item.icon === 'podcast'}
						<Mic class="h-4 w-4" />
					{:else}
						<Newspaper class="h-4 w-4" />
					{/if}
					{item.name}
				</a>
			{/each}
		</div>
		<Button href="{base}/media" variant="outline" class="mt-8">
			View All Media
		</Button>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading>Ready to Connect?</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			Hey Moms, Dads, and all you awesome adults—feel free to join your kiddos and tune in! Got questions or
			topic ideas? We'd love to hear from you!
		</p>
		<Button href="{base}/contact" size="lg" class="mt-8">
			Get in Touch
		</Button>
	</Container>
</Section>
