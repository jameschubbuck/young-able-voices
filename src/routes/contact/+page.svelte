<script lang="ts">
	import { Hero, Container, Section, Heading, Button, Card } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import ExternalLink from 'lucide-svelte/icons/external-link';
</script>

<svelte:head>
	<title>Contact - Young Able Voices</title>
	<meta name="description" content="Get in touch with Young Able Voices. We'd love to hear from you!" />
</svelte:head>

<Hero title="Contact Us" subtitle="We'd love to hear from you" />

<Section>
	<Container size="sm">
		<Card class="p-6 sm:p-8">
			<Heading size="sm">Interest Form</Heading>
			<p class="mt-4 leading-relaxed text-foreground/80">
				Ready to get started? Fill out our interest form to sign up for programs or ask questions.
			</p>
			<div class="mt-6 flex flex-col gap-3 sm:flex-row">
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLScYMC1owhE6MqyXYKN45B0KV0FINmKoAo3X60qY-APDQDxq1g/viewform"
					size="lg"
				>
					Open Interest Form
					<ExternalLink class="h-4 w-4" />
				</Button>
				<Button href="mailto:elina@youngablevoices.com" variant="outline" size="lg">
					Send Email
				</Button>
			</div>
		</Card>
		<p class="mt-6 text-center text-sm text-muted-foreground">
			Please understand that I am a college student with a very active calendar and may not be able to reply each day, but will do my best within 48-72 hours.
		</p>
	</Container>
</Section>
