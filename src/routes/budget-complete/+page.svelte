<script>
    // You can add any necessary script here
    import {goto} from "$app/navigation";
</script>

<svelte:head>
    <title>Budgeting</title>
    <meta name="description" content="Budgeting Progress" />
</svelte:head>

<div class="relative flex justify-center items-center min-h-screen md:p-8">
    <div class="md:p-8 w-full md:w-2/3">
        <div class="min-h-[100vh] h-full flex flex-col">
            <h1 class="text-2xl font-semibold mb-4">Budgeting - 3/12</h1>
            <div class="w-full bg-gray-200 h-4 rounded-full mt-2">
                <div class="bg-blue-500 h-4 rounded-full" style="width: 16.67%;"></div>
            </div>
            <div class="mt-8 grid grid-cols-4 gap-4">
                <button class="p-8 border rounded-lg shadow-md bg-green-200">Introduction to Budgeting</button>
                <button class="p-8 border rounded-lg shadow-md bg-green-200">Setting Financial Goals</button>
                <button class="p-8 border rounded-lg shadow-md bg-green-200">Tracking Expenses</button>
                <button class="p-8 border rounded-lg shadow-md">Creating a Budget Plan</button>
                <button class="p-8 border rounded-lg shadow-md">Adjusting Your Budget</button>
                <button class="p-8 border rounded-lg shadow-md">Saving Strategies</button>
                <button class="p-8 border rounded-lg shadow-md">Debt Management</button>
                <button class="p-8 border rounded-lg shadow-md">Emergency Funds</button>
                <button class="p-8 border rounded-lg shadow-md">Investing Basics</button>
                <button class="p-8 border rounded-lg shadow-md">Retirement Planning</button>
                <button class="p-8 border rounded-lg shadow-md">Tax Planning</button>
                <button class="p-8 border rounded-lg shadow-md">Reviewing Your Budget</button>
            </div>
            <div class="flex justify-center mt-8">
                <button
                        class="px-8 py-4 bg-blue-300 border rounded-lg shadow-md hover:bg-blue-500"
                        on:click={() => goto("/progress-learning")}
                >
                    Complete Course
                </button>
            </div>
        </div>
    </div>
</div>
