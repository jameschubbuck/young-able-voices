<script lang="ts">
	import Container from './Container.svelte';

	interface Props {
		title: string;
		subtitle?: string;
		ctaText?: string;
		ctaHref?: string;
	}

	let { title, subtitle, ctaText, ctaHref }: Props = $props();
</script>

<section class="border-b py-16 md:py-20">
	<Container>
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
				{title}
			</h1>
			{#if subtitle}
				<p class="relative mt-4 inline-block text-lg font-medium text-accent-foreground md:text-xl">
					<span class="absolute inset-0 blur-xl bg-accent-foreground/20"></span>
					<span class="relative">{subtitle}</span>
				</p>
			{/if}
		</div>
	</Container>
</section>
