<script>
	// Add any necessary script here
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About SheCanMoney" />
</svelte:head>

<div class="relative flex flex-col items-center min-h-screen p-8">
	<div class="w-full max-w-4xl text-center">
		<h1 class="text-4xl font-bold mb-4">ABOUT</h1>
		<p class="mb-8 text-lg">
			At SheCanMoney, our mission is to empower women by making finance accessible, understandable, and enjoyable.
			We understand that financial literacy is a critical skill for achieving personal and professional goals, yet it can
			often seem daunting and complex. That’s why we’ve created a learning platform that breaks down financial
			concepts into simple, easy-to-digest modules. Through interactive lessons, engaging videos, and practical
			exercises, we help women build confidence in managing their finances, from budgeting and saving to investing and
			retirement planning.
		</p>

		<h2 class="text-2xl font-bold mb-4">What we can suggest you to read?</h2>
		<div class="grid grid-cols-4 gap-4 mb-8">
			<button class="p-8 bg-orange-200 border rounded-lg shadow-md hover:bg-orange-300 col-span-2 row-span-2 text-left">
				<span class="block font-bold">Savings</span>
				<span>What is an ISA and Which One Do I Need?</span>
			</button>
			<button class="p-8 bg-green-200 border rounded-lg shadow-md hover:bg-green-300 col-span-2 text-left">
				<span class="block font-bold">Loans&Credits</span>
				<span>Understanding Taxes - What Do They All Mean?</span>
			</button>
			<button class="p-8 bg-pink-200 border rounded-lg shadow-md hover:bg-pink-300 text-left">
				<span>Placeholder</span>
			</button>
			<button class="p-8 bg-blue-200 border rounded-lg shadow-md hover:bg-blue-300 col-span-2 row-span-2 text-left">
				<span class="block font-bold">Investing</span>
				<span>Top Tips To Start Your Investment Journey</span>
			</button>
		</div>

		<h2 class="text-2xl font-bold mb-4">You can start your journey straight away with our courses:</h2>
		<div class="grid grid-cols-5 gap-4">
			<button class="p-8 bg-red-200 border rounded-lg shadow-md hover:bg-red-300">Savings</button>
			<button class="p-8 bg-green-200 border rounded-lg shadow-md hover:bg-green-300">Property</button>
			<button class="p-8 bg-blue-200 border rounded-lg shadow-md hover:bg-blue-300">Investing</button>
			<button class="p-8 bg-yellow-200 border rounded-lg shadow-md hover:bg-yellow-300">Pensions</button>
			<button class="p-8 bg-teal-200 border rounded-lg shadow-md hover:bg-teal-300">Insurance</button>
		</div>
	</div>
</div>
