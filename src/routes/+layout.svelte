<script>
	import Navbar from "../lib/components/Navbar.svelte";
	import "../app.css";
</script>

<div class="app">
	<Navbar />

	<div>
		<slot />
	</div>
</div>

