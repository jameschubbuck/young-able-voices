<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Mail from 'lucide-svelte/icons/mail';

	interface Social {
		platform: 'facebook' | 'instagram';
		url: string;
	}

	interface Props {
		name: string;
		role: string;
		focus: string;
		email: string;
		bio: string[];
		socials: Social[];
	}

	let { name, role, focus, email, bio, socials }: Props = $props();
</script>

<Card class="p-6">
	<div class="flex flex-col">
		<div class="aspect-square w-full max-w-[200px] overflow-hidden rounded-xl bg-muted">
			<div class="flex h-full w-full items-center justify-center text-muted-foreground/50">
				<svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
				</svg>
			</div>
		</div>
		<h3 class="mt-4 text-xl font-semibold">{name}</h3>
		<p class="text-sm text-muted-foreground">{role}</p>
		<div class="mt-4 space-y-3">
			{#each bio as paragraph}
				<p class="text-sm leading-relaxed text-foreground/80">{paragraph}</p>
			{/each}
		</div>
		<div class="mt-4 flex items-center gap-3">
			<a
				href="mailto:{email}"
				class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground"
				aria-label="Email {name}"
			>
				<Mail class="h-4 w-4" />
			</a>
			{#each socials as { platform, url }}
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground"
					aria-label="{name} on {platform}"
				>
					{#if platform === 'facebook'}
						<Facebook class="h-4 w-4" />
					{:else}
						<Instagram class="h-4 w-4" />
					{/if}
				</a>
			{/each}
		</div>
	</div>
</Card>
