<script lang="ts">
	import { Hero, Container, Section, Heading, Button, Card } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>One-on-One Meetings - Young Able Voices</title>
	<meta name="description" content="Personal support sessions for when you need individual attention." />
</svelte:head>

<Hero title="One-on-One Meetings" subtitle="Personal support when you need it" />

<Section>
	<Container size="sm">
		<Heading>Individual Support</Heading>
		<div class="mt-6 space-y-4">
			<p class="text-lg leading-relaxed text-foreground/80">
				Sometimes you might want to talk one-on-one rather than in a group setting. That's completely okay! We
				offer individual meetings for those who prefer personal attention.
			</p>
			<p class="leading-relaxed text-foreground/80">
				Whether you're nervous about joining a group chat, have specific questions, or just want someone to
				listen, we're here for you.
			</p>
		</div>
		<div class="mt-8 grid gap-6 sm:grid-cols-2">
			<Card class="p-6">
				<h3 class="text-lg font-semibold">What to Expect</h3>
				<ul class="mt-4 space-y-2 text-sm text-foreground/80">
					<li>• A friendly, no-pressure conversation</li>
					<li>• Someone who understands what you're going through</li>
					<li>• Tips and suggestions based on real experience</li>
					<li>• Complete confidentiality</li>
				</ul>
			</Card>
			<Card class="p-6">
				<h3 class="text-lg font-semibold">How to Schedule</h3>
				<ul class="mt-4 space-y-2 text-sm text-foreground/80">
					<li>• Reach out via email or our contact form</li>
					<li>• Let us know what you'd like to discuss</li>
					<li>• We'll find a time that works for both of us</li>
					<li>• Parents are welcome to join!</li>
				</ul>
			</Card>
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Schedule a Meeting</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			Send us an email or fill out our contact form to request a one-on-one meeting.
		</p>
		<Button href="{base}/contact" class="mt-6"> Contact Us </Button>
	</Container>
</Section>
