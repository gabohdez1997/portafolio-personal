<script lang="ts">
	import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from 'lucide-svelte';
	import { addToast } from '$lib/stores/toast';
	import { reveal } from '$lib/actions/reveal';

	let isSubmitting = $state(false);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		isSubmitting = true;

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: new FormData(form),
				headers: {
					Accept: 'application/json'
				}
			});

			if (response.ok) {
				addToast('¡Mensaje enviado con éxito!', 'success');
				form.reset();
			} else {
				addToast('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', 'error');
			}
		} catch (error) {
			addToast('Error de conexión. Verifica tu internet.', 'error');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contacto" class="relative overflow-hidden py-24">
	<!-- Background Gradients -->
	<div
		class="pointer-events-none absolute bottom-0 left-0 h-[500px] w-full bg-gradient-to-t from-[var(--color-primary)]/10 to-transparent"
	></div>

	<div class="reveal relative z-10 mx-auto max-w-6xl px-6" use:reveal>
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<!-- Contact Info -->
			<div class="space-y-8">
				<h2 class="font-display text-4xl font-bold md:text-5xl">
					¿Listo para <br />
					<span
						class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
					>
						comenzar un proyecto?
					</span>
				</h2>

				<p class="max-w-md text-lg leading-relaxed text-gray-400">
					Estoy disponible para nuevas oportunidades y colaboraciones. Si tienes una idea o
					necesitas soporte en redes, hablemos.
				</p>

				<div class="space-y-6 pt-4">
					<a
						href="mailto:gabohdez1997@gmail.com"
						class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
					>
						<div
							class="rounded-full bg-[var(--color-primary)]/20 p-3 text-[var(--color-primary)] transition-transform group-hover:scale-110"
						>
							<Mail class="h-6 w-6" />
						</div>
						<div>
							<p class="text-sm text-gray-500">Email</p>
							<p
								class="font-medium text-white transition-colors group-hover:text-[var(--color-primary)]"
							>
								gabohdez1997@gmail.com
							</p>
						</div>
					</a>

					<a
						href="https://wa.me/584127769940"
						target="_blank"
						class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
					>
						<div
							class="rounded-full bg-[var(--color-accent)]/20 p-3 text-[var(--color-accent)] transition-transform group-hover:scale-110"
						>
							<Phone class="h-6 w-6" />
						</div>
						<div>
							<p class="text-sm text-gray-500">Teléfono / WhatsApp</p>
							<p
								class="font-medium text-white transition-colors group-hover:text-[var(--color-accent)]"
							>
								+58 412-776 99 40
							</p>
						</div>
					</a>

					<div class="flex items-center gap-4 p-4">
						<div class="p-3 text-gray-500">
							<MapPin class="h-6 w-6" />
						</div>
						<div>
							<p class="text-sm text-gray-500">Ubicación</p>
							<p class="font-medium text-white">Carabobo, Venezuela</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Form (Visual Representation) -->
			<form
				action="https://formspree.io/f/xaqqqovn"
				method="POST"
				class="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md"
				onsubmit={handleSubmit}
			>
				<div class="space-y-2">
					<label for="name" class="text-sm font-medium text-gray-400">Nombre</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Tu nombre"
						required
						class="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-gray-600 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
					/>
				</div>

				<div class="space-y-2">
					<label for="email" class="text-sm font-medium text-gray-400">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="tu@email.com"
						required
						class="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-gray-600 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
					/>
				</div>

				<div class="space-y-2">
					<label for="message" class="text-sm font-medium text-gray-400">Mensaje</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						placeholder="¿En qué puedo ayudarte?"
						required
						class="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-gray-600 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
					></textarea>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					class="flex w-full transform items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-blue-600 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
				>
					{#if isSubmitting}
						<Loader2 class="h-5 w-5 animate-spin" />
						Enviando...
					{:else}
						Enviar Mensaje
						<Send class="h-5 w-5" />
					{/if}
				</button>
			</form>
		</div>

		<!-- Footer -->
		<div
			class="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-gray-500 md:flex-row"
		>
			<p>© {new Date().getFullYear()} Gabriel Hernández. Todos los derechos reservados.</p>
			<div class="flex gap-6">
				<a
					href="https://github.com/gabohdez1997"
					target="_blank"
					class="transition-colors hover:text-white"
					aria-label="GitHub"
				>
					<Github class="h-6 w-6" />
				</a>
				<a
					href="https://www.linkedin.com/in/gabohdez1997/"
					target="_blank"
					class="transition-colors hover:text-white"
					aria-label="LinkedIn"
				>
					<Linkedin class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>
</section>
