<script lang="ts">
	import { Hero, Container, Section, Heading, Button } from '$lib/ui';
	import { Card } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Weekly Chats - Young Able Voices</title>
	<meta name="description" content="Join our weekly video chats to connect with peers facing similar challenges." />
</svelte:head>

<Hero title="Weekly Chats & Videos" subtitle="Connect, share, and grow together" />

<Section>
	<Container size="sm">
		<Heading>How It Works</Heading>
		<div class="mt-6 space-y-4">
			<p class="text-lg leading-relaxed text-foreground/80">
				Each week we have a specific video posted to get the chat rolling. This video will be posted a few days
				prior to each chat and will give you an idea of where the conversation will begin.
			</p>
			<p class="leading-relaxed text-foreground/80">
				When you join, you can certainly just listen in if you feel a little shy—no problem! When you feel like
				you would like to share and speak to the group, you are always welcome too.
			</p>
		</div>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm">
		<Heading>Expectations for Weekly Chats</Heading>
		<Card class="mt-6 p-6">
			<ul class="space-y-3">
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
					<span class="text-foreground/80">Be respectful and kind to everyone in the group</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
					<span class="text-foreground/80">Listen when others are sharing—everyone's voice matters</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
					<span class="text-foreground/80">What's shared in the group stays in the group—keep it confidential</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</span>
					<span class="text-foreground/80">It's okay to just listen! You don't have to share if you're not comfortable</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">5</span>
					<span class="text-foreground/80">Parents are welcome to join and support their kids</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">6</span>
					<span class="text-foreground/80">Have fun and make new friends!</span>
				</li>
			</ul>
		</Card>
	</Container>
</Section>

<Separator />

<Section>
	<Container size="sm" class="text-center">
		<Heading size="sm">Ready to Join?</Heading>
		<p class="mt-4 leading-relaxed text-foreground/80">
			Fill out our interest form and we'll get back to you with upcoming chat times and details.
		</p>
		<Button href="{base}/contact" class="mt-6"> Sign Up </Button>
	</Container>
</Section>
