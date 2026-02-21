<script lang="ts">
	import { Hero, Container, Section, Heading, ProfileCard } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import team from '$lib/data/team.json';
</script>

<svelte:head>
	<title>About - Young Able Voices</title>
	<meta name="description" content="Learn about Young Able Voices and our mission to support kids with hidden disabilities." />
</svelte:head>

<Hero title="About Young Able Voices" />

<Section>
	<Container size="sm">
		<Heading>Our Mission</Heading>
		<div class="mt-6 space-y-4">
			<p class="leading-relaxed text-foreground/80">
				Young Able Voices was created to provide a safe, supportive community for children with hidden disabilities.
				We believe that no child should feel alone in their journey.
			</p>
			<p class="leading-relaxed text-foreground/80">
				Hidden disabilities — invisible conditions like speech disorders, learning differences, chronic illnesses, and
				neurological conditions — can be isolating. Kids often feel misunderstood or different from their peers.
			</p>
			<p class="leading-relaxed text-foreground/80">
				Through peer-to-peer support, we help children connect with others who truly understand what they're going
				through. Together, we share tips, encouragement, and friendship.
			</p>
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container>
		<Heading class="mb-8">Meet Our Team</Heading>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each team as member}
				<ProfileCard {...member} />
			{/each}
		</div>
	</Container>
</Section>
