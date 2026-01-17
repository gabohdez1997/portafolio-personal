<script lang="ts">
	import { ExternalLink, Github, Layers } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';

	let projects = [
		{
			title: 'Cacique Telecom',
			description:
				'Página web y sistema de gestión interna de Cacique Telecom, mejorando la eficiencia del departamento administrativo.',
			tags: ['PHP', 'MySQL', 'JavaScript', 'MaterializeCSS'],
			link: 'https://caciquetelecom.com/',
			image: '/cacique-telecom.png' // Using CSS class as placeholder for image
		},
		{
			title: 'Infraestructura FTTH',
			description:
				'Documentación y diseño logico de la red de fibra óptica hasta el hogar (FTTH) de Cacique Telecom, optimizando el despliegue y mantenimiento.',
			tags: ['Redes', 'Documentación', 'AdminOLT', 'The Dude'],
			link: '#',
			github: null,
			image: '/documentacion-ftth.jpg'
		},
		{
			title: 'Portafolio Personal',
			description:
				'Este sitio web. Un portafolio moderno y responsivo diseñado para mostrar mis habilidades y experiencia profesional.',
			tags: ['Svelte 5', 'TailwindCSS', 'TypeScript', 'Motion'],
			link: '#',
			github: 'https://github.com/gabohdez1997',
			image: '/portafolio-personal.png'
		}
	];
</script>

<section id="proyectos" class="relative bg-black/20 py-24">
	<div class="reveal mx-auto max-w-6xl px-6" use:reveal>
		<div class="mb-16 flex flex-col items-center text-center">
			<span
				class="mb-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
			>
				Portafolio
			</span>
			<h2 class="font-display text-4xl font-bold md:text-5xl">
				Proyectos <span class="text-[var(--color-primary)]">Destacados</span>
			</h2>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div
					class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/30 hover:shadow-2xl"
				>
					<!-- Image Placeholder -->
					<!-- Image Placeholder / Thumbnail -->
					<div class="relative aspect-video w-full overflow-hidden bg-gray-900">
						{#if project.image.startsWith('bg-')}
							<div class={`absolute inset-0 ${project.image}`}></div>
							<div
								class="absolute inset-0 flex items-center justify-center opacity-30 transition-opacity duration-300 group-hover:opacity-100"
							>
								<Layers class="h-16 w-16 text-white/20" />
							</div>
						{:else}
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						{/if}
						<!-- Overlay on hover -->
						<div
							class="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							{#if project.link && project.link !== '#'}
								<a
									href={project.link}
									target="_blank"
									class="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
									title="Ver Proyecto"
								>
									<ExternalLink size={20} />
								</a>
							{/if}
							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									class="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
									title="Ver Código"
								>
									<Github size={20} />
								</a>
							{/if}
						</div>
					</div>

					<!-- Content -->
					<div class="p-6">
						<h3
							class="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[var(--color-primary)]"
						>
							{project.title}
						</h3>
						<p class="mb-4 text-sm text-gray-400">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span
									class="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
