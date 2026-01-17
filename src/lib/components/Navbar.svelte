<script lang="ts">
	import { House, User, Briefcase, Wrench, Mail, Layers, X, Menu } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	let isOpen = $state(false);

	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});

	let links = [
		{ name: 'Inicio', href: '#inicio', icon: House },
		{ name: 'Sobre Mí', href: '#sobre-mi', icon: User },
		{ name: 'Experiencia', href: '#experiencia', icon: Briefcase },
		{ name: 'Proyectos', href: '#proyectos', icon: Layers },
		{ name: 'Habilidades', href: '#habilidades', icon: Wrench },
		{ name: 'Contacto', href: '#contacto', icon: Mail }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-white/5 bg-black/90 px-6 py-4 backdrop-blur-md md:bg-black/30"
>
	<div class="font-display text-xl font-bold tracking-wide">
		Gabriel<span class="text-[var(--color-primary)]">.dev</span>
	</div>

	<ul class="hidden gap-8 md:flex">
		{#each links as link}
			<li>
				<a
					href={link.href}
					class="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>

	<!-- Mobile Menu Button -->
	<button
		onclick={toggleMenu}
		class="relative z-[100] p-2 text-white md:hidden"
		aria-label="Toggle Menu"
	>
		{#if isOpen}
			<X size={24} />
		{:else}
			<Menu size={24} />
		{/if}
	</button>

	<!-- Mobile Menu Overlay -->
	{#if isOpen}
		<div
			transition:fade={{ duration: 200 }}
			class="fixed inset-0 z-[90] flex h-screen w-full flex-col items-center justify-center bg-black/95 backdrop-blur-xl md:hidden"
			onclick={closeMenu}
			aria-hidden="true"
		>
			<ul
				class="flex flex-col items-center justify-center gap-8"
				in:fly={{ y: 20, duration: 300, delay: 100 }}
			>
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={closeMenu}
							class="flex items-center gap-3 text-2xl font-bold text-gray-300 transition-colors hover:text-[var(--color-primary)]"
						>
							<link.icon class="h-6 w-6" />
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
