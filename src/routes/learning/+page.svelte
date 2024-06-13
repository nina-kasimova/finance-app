<script>

</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="relative flex justify-center items-center min-h-screen md:p-8">
    <div class="md:p-8 w-full md:w-2/3">
        <div class="min-h-[100vh] h-full flex flex-col">
            <h1 class="text-2xl font-semibold mb-4">Your courses</h1>
            <div class="flex flex-col items-left">
                <button class="w-48 p-4 border rounded-lg shadow-md hover:bg-blue-200">
                    <div class="flex justify-between items-center">
                        <span>In progress</span>
                        <div class="w-8 h-8 bg-green-200 rounded-full"></div>
                    </div>
                    <div class="mt-2 text-center">
                        <div>Banking/Savings</div>
                        <div class="text-sm">1 / 2</div>
                        <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
                            <div class="bg-blue-500 h-2 rounded-full" style="width: 50%;"></div>
                        </div>
                    </div>
                </button>
                <div class="mt-8 text-left">
                    <h2 class="text-2xl font-semibold mb-4">Your next course</h2>
                    <div class="mt-4 flex space-x-4">
                        <button class="p-4 border rounded-lg shadow-md hover:bg-blue-200">Loans & Credits</button>
                        <button class="p-4 border rounded-lg shadow-md hover:bg-blue-200">Property</button>
                        <button class="p-4 border rounded-lg shadow-md hover:bg-blue-200">Investing</button>
                        <button class="p-4 border rounded-lg shadow-md hover:bg-blue-200">Pensions</button>
                        <button class="p-4 border rounded-lg shadow-md hover:bg-blue-200">Insurance</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>