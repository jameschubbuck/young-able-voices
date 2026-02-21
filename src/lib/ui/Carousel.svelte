<script lang="ts">
	import Button from '$lib/components/ui/button/index.svelte';
	import Container from './Container.svelte';
	import { cn } from '$lib/utils/cn';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	interface CarouselItem {
		image?: string;
		title?: string;
		description?: string;
	}

	interface Props {
		items: CarouselItem[];
	}

	let { items }: Props = $props();
	let currentIndex = $state(0);

	function goTo(index: number) {
		currentIndex = index;
	}

	function next() {
		currentIndex = (currentIndex + 1) % items.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
	}
</script>

<div class="relative overflow-hidden rounded-xl border bg-muted">
	<div class="aspect-video">
		{#if items[currentIndex]?.image}
			<img
				src={items[currentIndex].image}
				alt={items[currentIndex].title || ''}
				class="h-full w-full object-cover"
			/>
		{:else}
			<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/5 to-muted">
				<div class="text-center">
					<div class="mx-auto mb-4 h-20 w-20 rounded-xl bg-muted"></div>
					{#if items[currentIndex]?.title}
						<p class="font-medium">{items[currentIndex].title}</p>
					{/if}
				</div>
			</div>
		{/if}
	</div>

	{#if items.length > 1}
		<Button
			variant="ghost"
			size="icon"
			onclick={prev}
			class="absolute left-3 top-1/2 h-9 w-9 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
			aria-label="Previous slide"
		>
			<ChevronLeft class="h-5 w-5" />
		</Button>

		<Button
			variant="ghost"
			size="icon"
			onclick={next}
			class="absolute right-3 top-1/2 h-9 w-9 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
			aria-label="Next slide"
		>
			<ChevronRight class="h-5 w-5" />
		</Button>

		<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
			{#each items as _, i}
				<button
					onclick={() => goTo(i)}
					class={cn(
						'h-2 rounded-full transition-all',
						i === currentIndex ? 'w-4 bg-primary' : 'w-2 bg-background/60 hover:bg-background'
					)}
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>
