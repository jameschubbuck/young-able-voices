<script lang="ts">
	import { Hero, Container, Section, Heading, Button } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Dyslexia Support - Young Able Voices</title>
	<meta name="description" content="Support group for kids with dyslexia and reading challenges." />
</svelte:head>

<Hero title="Dyslexia Support" subtitle="Navigate reading challenges together" />

<Section>
	<Container size="sm">
		<Heading>About Our Dyslexia Group</Heading>
		<div class="mt-6 space-y-4">
			<p class="text-lg leading-relaxed text-foreground/80">
				Dyslexia affects how your brain processes words, but it doesn't define your intelligence or potential.
				Our dyslexia support group is a place to connect with others who understand the challenges and celebrate
				the unique strengths that come with thinking differently.
			</p>
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Join the Dyslexia Group</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			Connect with peers who understand. Sign up to get notified about upcoming sessions.
		</p>
		<Button href="{base}/contact" class="mt-6"> Sign Up </Button>
	</Container>
</Section>
