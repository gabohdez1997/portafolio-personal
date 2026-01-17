<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>Gabriel Hernandez - Desarrollador Web & Especialista TI</title>
	<meta
		name="description"
		content="Portafolio de Gabriel Hernandez. Desarrollador Web y Especialista en Redes/FTTH. Transformo ideas en experiencias digitales y optimizo infraestructuras."
	/>
	<meta property="og:title" content="Gabriel Hernandez - Portafolio" />
	<meta
		property="og:description"
		content="Desarrollador Web y Especialista en Redes/FTTH. Conoce mis proyectos y experiencia."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/gabriel-hernandez.jpg" />
</svelte:head>

<Navbar />
<main>
	<Hero />
	<AboutMe />
	<Experience />
	<Projects />
	<Skills />
	<Contact />
</main>
