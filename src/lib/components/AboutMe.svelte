<script lang="ts">
	import { User, Code, Server, Coffee } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="sobre-mi" class="relative py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="reveal grid items-center gap-16 lg:grid-cols-2" use:reveal>
			<!-- Image / Visual Side -->
			<div class="relative order-2 lg:order-1">
				<div
					class="relative z-10 mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border-2 border-white/10 bg-white/5 shadow-2xl transition-transform duration-500 hover:rotate-2"
				>
					<img
						src="/gabriel-hernandez.jpg"
						alt="Gabriel Hernandez"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				</div>

				<!-- Decorative Elements -->
				<div
					class="absolute -top-10 -left-10 -z-10 h-64 w-64 rounded-full bg-[var(--color-primary)] opacity-20 blur-[80px]"
				></div>
				<div
					class="absolute -right-10 -bottom-10 -z-10 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-20 blur-[80px]"
				></div>
			</div>

			<!-- Text Content -->
			<div class="order-1 space-y-8 lg:order-2">
				<h2 class="font-display text-4xl font-bold md:text-5xl">
					Sobre <span class="text-[var(--color-primary)]">Mí</span>
				</h2>

				<div class="space-y-4 text-lg leading-relaxed text-gray-400">
					<p>
						¡Hola! Soy Gabriel Hernandez, un apasionado desarrollador web y especialista en soporte
						técnico con base en Venezuela. Mi viaje en la tecnología comenzó hace varios años,
						combinando mi curiosidad por cómo funcionan las cosas con la necesidad de crear
						soluciones eficientes.
					</p>
					<p>
						Me especializo en crear <span class="font-medium text-white"
							>experiencias web modernas</span
						>
						y en la
						<span class="font-medium text-white"
							>gestión de servidores e infraestructuras de red</span
						>. Disfruto tanto escribiendo código limpio como configurando equipos para optimizar
						conexiones.
					</p>
					<p>
						Cuando no estoy frente a la pantalla, siempre estoy buscando aprender nuevas tecnologías
						o mejorando mis habilidades actuales para ofrecer lo mejor en cada proyecto.
					</p>
				</div>

				<!-- Mini Stats / Highlights -->
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<div
						class="rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10"
					>
						<Code class="mx-auto mb-2 h-6 w-6 text-[var(--color-primary)]" />
						<div class="font-bold text-white">Programación</div>
						<div class="text-xs text-gray-500">PHP, JavaScript, Python</div>
					</div>
					<div
						class="rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10"
					>
						<Server class="mx-auto mb-2 h-6 w-6 text-[var(--color-accent)]" />
						<div class="font-bold text-white">Redes</div>
						<div class="text-xs text-gray-500">FTTH, Mikrotik, Servidores</div>
					</div>
					<div
						class="rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10"
					>
						<Coffee class="mx-auto mb-2 h-6 w-6 text-yellow-500" />
						<div class="font-bold text-white">Pasión</div>
						<div class="text-xs text-gray-500">Café, Aprendizaje continuo, Ajedrez</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
