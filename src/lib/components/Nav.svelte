<script lang="ts">
	import { base } from '$app/paths';
	import { Logo, Button, ThemeToggle } from '$lib/ui';
	import { cn } from '$lib/utils/cn';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/about`, label: 'About' },
		{
			href: `${base}/programs`,
			label: 'Programs',
			children: [
				{ href: `${base}/programs/weekly-chats`, label: 'Weekly Chats' },
				{ href: `${base}/programs/one-on-one`, label: 'One-on-One' },
				{ href: `${base}/programs/specialized`, label: 'Specialized Chats' }
			]
		},
		{ href: `${base}/resources`, label: 'Resources' },
		{ href: `${base}/media`, label: 'Media' },
		{ href: `${base}/contact`, label: 'Contact' }
	];
</script>

<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a href="{base}/" class="flex items-center gap-2">
			<Logo />
		</a>

		<nav class="hidden items-center gap-1 lg:flex">
			{#each navLinks as link}
				{#if link.children}
					<div class="relative group">
						<a
							href={link.href}
							class="inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
						>
							{link.label}
							<ChevronDown class="h-4 w-4" />
						</a>
						<div
							class="invisible absolute left-0 top-full z-50 mt-1 w-48 rounded-md border bg-popover p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100"
						>
							{#each link.children as child}
								<a
									href={child.href}
									class="block rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
								>
									{child.label}
								</a>
							{/each}
						</div>
					</div>
				{:else}
					<a
						href={link.href}
						class="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
					>
						{link.label}
					</a>
				{/if}
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<Button class="hidden h-9 sm:inline-flex">
				Donate
			</Button>
			<ThemeToggle class="h-9 w-9" />
			<Button
				variant="ghost"
				size="icon"
				class="h-9 w-9 lg:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				{#if mobileMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</Button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="border-t bg-card lg:hidden">
			<div class="mx-auto max-w-6xl space-y-1 px-4 py-4">
				{#each navLinks as link}
					{#if link.children}
						<div class="space-y-1">
							<a
								href={link.href}
								class="block rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-accent"
							>
								{link.label}
							</a>
							<div class="ml-4 space-y-1 border-l pl-3">
								{#each link.children as child}
									<a
										href={child.href}
										class="block rounded-md px-3 py-2 text-sm text-foreground/60 hover:bg-accent"
									>
										{child.label}
									</a>
								{/each}
							</div>
						</div>
					{:else}
						<a
							href={link.href}
							class="block rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-accent"
						>
							{link.label}
						</a>
					{/if}
				{/each}
				<Button class="mt-4 h-9 w-full sm:hidden">
					Donate
				</Button>
			</div>
		</div>
	{/if}
</header>
