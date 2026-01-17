<script lang="ts">
	import { Briefcase, Calendar, MapPin } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';

	let experiences = [
		{
			company: 'CCQ Telecom C.A',
			role: 'Soporte técnico / Desarrollador web',
			period: '2023 - 2025',
			description:
				'Desarrollo integral de la web corporativa y sistema de gestión interno. Diseño, documentación y despliegue de infraestructura de red FTTH, asegurando la escalabilidad del servicio.',
			location: 'Aragua / La Victoria'
		},
		{
			company: 'Guarapos Venezolanos C.A',
			role: 'Soporte técnico',
			period: '2020 - 2022',
			description:
				'Administración de servidores Windows y Active Directory. Gestión proactiva de infraestructura TI y soporte técnico especializado para garantizar la continuidad operativa.',
			location: 'Aragua / Maracay'
		},
		{
			company: 'Consejo Municipal Santiago Mariño',
			role: 'Soporte técnico',
			period: '2017 - 2020',
			description:
				'Diseño e implementación de la arquitectura de red local (LAN). Mantenimiento preventivo y correctivo de equipos informáticos, optimizando el flujo de trabajo administrativo.',
			location: 'Aragua / Turmero'
		},
		{
			company: 'Vida 102.5 FM',
			role: 'Operador de Radio',
			period: '2016 - 2017',
			description:
				'Operador de control master responsable de la emisión, programación musical y producción técnica de contenidos radiales en vivo.',
			location: 'Aragua / Turmero'
		},
		{
			company: 'Inversiones Aeroimport C.A',
			role: 'Técnico de Celulares',
			period: '2015 - 2016',
			description:
				'Servicio técnico especializado en hardware y software para dispositivos móviles. Diagnóstico avanzado y gestión de garantías con enfoque en la satisfacción del cliente.',
			location: 'Aragua / Turmero'
		}
	];
</script>

<section id="experiencia" class="relative py-20">
	<div class="reveal mx-auto max-w-4xl px-6" use:reveal>
		<h2 class="mb-16 text-center font-display text-4xl font-bold md:text-5xl">
			Experiencia <span class="text-[var(--color-primary)]">Laboral</span>
		</h2>

		<div
			class="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent md:before:mx-auto md:before:ml-[50%] md:before:h-full md:before:w-0.5"
		>
			{#each experiences as exp, i}
				<div
					class="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
				>
					<!-- Dot -->
					<div
						class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a] shadow-[0_0_10px_rgba(59,130,246,0.2)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
					>
						<Briefcase class="h-4 w-4 text-[var(--color-primary)]" />
					</div>

					<!-- Card -->
					<div
						class="w-[calc(100%-4rem)] rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-[var(--color-primary)]/30 hover:bg-white/10 md:w-[calc(50%-2.5rem)]"
					>
						<div class="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
							<h3
								class="text-xl font-bold text-white transition-colors group-hover:text-[var(--color-primary)]"
							>
								{exp.company}
							</h3>
							<span
								class="flex w-fit items-center gap-1 rounded bg-white/5 px-2 py-1 font-mono text-xs text-gray-400"
							>
								<Calendar class="h-3 w-3" />
								{exp.period}
							</span>
						</div>

						<h4 class="mb-2 flex items-center gap-2 text-lg font-medium text-gray-300">
							{exp.role}
						</h4>

						<p class="mb-4 text-sm leading-relaxed text-gray-400">
							{exp.description}
						</p>

						<div class="flex items-center gap-2 text-xs text-gray-500">
							<MapPin class="h-3 w-3" />
							{exp.location}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
