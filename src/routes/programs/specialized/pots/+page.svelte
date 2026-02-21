<script lang="ts">
	import { Hero, Container, Section, Heading, Button } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>POTS & Dysautonomia Support - Young Able Voices</title>
	<meta name="description" content="Support group for kids with POTS and dysautonomia conditions." />
</svelte:head>

<Hero title="POTS & Dysautonomia" subtitle="Support for those navigating chronic conditions" />

<Section>
	<Container size="sm">
		<Heading>About Our POTS Group</Heading>
		<div class="mt-6 space-y-4">
			<p class="text-lg leading-relaxed text-foreground/80">
				POTS (Postural Orthostatic Tachycardia Syndrome) and other forms of dysautonomia can make everyday
				activities challenging. If you're dealing with dizziness, fatigue, or other symptoms that others can't
				see, this group is for you.
			</p>
			<p class="leading-relaxed text-foreground/80">
				Connect with peers who understand what it's like to manage a chronic invisible illness while still being
				a kid.
			</p>
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Join the POTS Support Group</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			Ready to connect with others who understand? Sign up to learn about upcoming sessions.
		</p>
		<Button href="{base}/contact" class="mt-6"> Sign Up </Button>
	</Container>
</Section>
