<script lang="ts">
	import { ArrowRight, Download } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section
	id="inicio"
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center"
>
	<!-- Background Effects -->
	<div
		class="animate-blob pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-20 mix-blend-screen blur-[120px]"
	></div>
	<div
		class="animate-blob animation-delay-2000 pointer-events-none absolute right-0 bottom-0 -z-10 h-[600px] w-[800px] rounded-full bg-[var(--color-accent)] opacity-10 mix-blend-screen blur-[100px]"
	></div>

	<!-- Content -->
	<div class="animate-fade-in-up reveal z-10 mx-auto max-w-4xl space-y-6" use:reveal>
		<!-- <div
			class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-[var(--color-accent)]"
		>
			<span class="relative flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
			</span>
			Disponible para trabajar
		</div> -->

		<h1
			class="font-display text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl lg:text-8xl"
		>
			Desarrollador Web <br />
			<span
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
			>
				& Redes
			</span>
		</h1>

		<p class="mx-auto max-w-2xl text-lg leading-relaxed font-light text-gray-400 md:text-xl">
			Transformo ideas en experiencias digitales fluidas, optimizo infraestructuras de red.
			<span class="font-medium text-white">Full-Stack</span> y
			<span class="font-medium text-white">Administrador de Servidores</span>.
		</p>

		<div class="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
			<a
				href="#experiencia"
				class="group flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
			>
				Ver Experiencia
				<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</a>

			<a
				href="/CV_Gabriel_Hernandez.pdf"
				class="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
			>
				<Download class="h-4 w-4" />
				Descargar CV
			</a>
		</div>
	</div>

	<!-- Scroll Down Indicator -->
	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
		<div class="flex h-10 w-6 justify-center rounded-full border-2 border-white p-1">
			<div class="animate-scroll h-2 w-1 rounded-full bg-white"></div>
		</div>
	</div>
</section>

<style>
	/* Custom keyframes for fade-in-up if not in tailwind config */
	@keyframes fade-in-up {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in-up {
		animation: fade-in-up 1s ease-out forwards;
	}

	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}
	.animate-blob {
		animation: blob 7s infinite;
	}
	.animation-delay-2000 {
		animation-delay: 2s;
	}
</style>
