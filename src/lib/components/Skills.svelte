<script lang="ts">
	import { Code, Server, Wrench, Database, Terminal, Cloud } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';

	let skillCategories = [
		{
			title: 'Desarrollo Web',
			icon: Code,
			color: 'text-blue-400',
			skills: [
				'Lenguaje C',
				'PHP',
				'Laravel',
				'JavaScript',
				'Svelte',
				'SQL y NoSQL',
				'CSS',
				'TailwindCSS',
				'Python',
				'Django',
				'Agentes de IA'
			]
		},
		{
			title: 'Redes & Infraestructura',
			icon: Terminal,
			color: 'text-teal-400',
			skills: [
				'Mikrotik',
				'OLT Vsol y ZTE',
				'Fibra Óptica (FTTH)',
				'Cableado Estructurado',
				'Routing',
				'Switching'
			]
		},
		{
			title: 'Sistemas & Virtualización',
			icon: Server,
			color: 'text-purple-400',
			skills: [
				'Proxmox',
				'Docker',
				'Zabbix',
				'Netbox',
				'UISP',
				'NextCloud',
				'Alta Disponibilidad (HA) de Servidores',
				'Windows Server',
				'Active Directory'
			]
		}
	];
</script>

<section id="habilidades" class="relative bg-black/20 py-24">
	<!-- Background Decor -->
	<div
		class="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]"
	></div>

	<div class="reveal mx-auto max-w-6xl px-6" use:reveal>
		<h2 class="mb-16 text-center font-display text-4xl font-bold md:text-5xl">
			Aptitudes & <span
				class="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
				>Conocimientos</span
			>
		</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each skillCategories as category}
				<div
					class="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
				>
					<!-- Glow Effect -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					></div>

					<!-- Header -->
					<div class="relative mb-8 flex items-center gap-4">
						<div
							class="rounded-2xl border border-white/10 bg-black/50 p-3 {category.color} shadow-lg transition-transform duration-300 group-hover:scale-110"
						>
							<category.icon class="h-8 w-8" />
						</div>
						<h3 class="font-display text-xl font-bold">{category.title}</h3>
					</div>

					<!-- Skills List -->
					<div class="relative flex flex-wrap gap-3">
						{#each category.skills as skill}
							<span
								class="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
