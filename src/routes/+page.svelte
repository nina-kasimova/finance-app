<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
import {goto} from "$app/navigation";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<!--<div class="relative flex justify-center items-center min-h-screen md:p-8">-->
<!--	<div class="md:p-8 w-full md:w-2/3">-->
<!--		<div class="min-h-[100vh] h-full flex flex-col">-->
<!--			<p>We are here to help you manage finances</p>-->

<!--		</div>-->
<!--	</div>-->
<!--</div>-->


<div class="relative flex justify-center items-center min-h-screen md:p-8 mt-20">
	<div class="md:p-8 w-full md:w-2/3">
		<div class="min-h-[100vh] h-full flex flex-col items-center">
		<h1 class="text-5xl font-bold mb-4">We'll help you learn finances easily and fun</h1>
		<p class="text-xl mb-8">Personal finance tools can help women overcome their unique financial hurdles.</p>
		<div class="flex justify-center space-x-4">
			<button on:click={()=> goto("/register")} class="px-8 py-4 bg-green-200 border rounded-lg shadow-md hover:bg-green-300">Join now</button>
			<button on:click={()=> goto("/about")} class="px-8 py-4 bg-green-200 border rounded-lg shadow-md hover:bg-green-300">Learn more</button>
		</div>
	</div>
	</div>
</div>
