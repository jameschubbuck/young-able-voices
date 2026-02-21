<script lang="ts">
	import { Logo, Container } from '$lib/ui';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import { base } from '$app/paths';
</script>

<footer class="border-t bg-card">
	<Container>
		<div class="grid gap-8 py-12 md:grid-cols-4">
			<div class="md:col-span-2">
				<Logo />
				<p class="mt-4 max-w-sm text-sm text-muted-foreground">
					A safe place for kids with hidden disabilities to connect, and know they aren't alone. Your future
					is bright.
				</p>
				<div class="mt-6 flex items-center gap-3">
					<a
						href="https://www.facebook.com/youngablevoices/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground"
						aria-label="Facebook"
					>
						<Facebook class="h-4 w-4" />
					</a>
					<a
						href="https://instagram.com/young_able_voices"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground"
						aria-label="Instagram"
					>
						<Instagram class="h-4 w-4" />
					</a>
					<a
						href="https://tiktok.com/@youngablevoices"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground"
						aria-label="TikTok"
					>
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
						</svg>
					</a>
				</div>
			</div>

			<div>
				<h3 class="mb-3 text-sm font-semibold">Programs</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="{base}/programs/weekly-chats" class="text-muted-foreground transition-colors hover:text-foreground">Weekly Chats</a></li>
					<li><a href="{base}/programs/one-on-one" class="text-muted-foreground transition-colors hover:text-foreground">One-on-One</a></li>
					<li><a href="{base}/programs/specialized" class="text-muted-foreground transition-colors hover:text-foreground">Specialized Chats</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-3 text-sm font-semibold">Connect</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="{base}/contact" class="text-muted-foreground transition-colors hover:text-foreground">Contact Us</a></li>
					<li><a href="{base}/media" class="text-muted-foreground transition-colors hover:text-foreground">Press & Media</a></li>
				</ul>
			</div>
		</div>

		<div class="border-t py-6 text-center text-xs text-muted-foreground">
			<p>&copy; {new Date().getFullYear()} Young Able Voices. All rights reserved.</p>
			<p class="mt-1">Peer-to-peer support group. Not licensed therapists.</p>
		</div>
	</Container>
</footer>
