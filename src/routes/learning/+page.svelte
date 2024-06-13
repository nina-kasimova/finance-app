<script>
    // Add any necessary script here
import {goto} from "$app/navigation";
</script>

<svelte:head>
    <title>Your Courses</title>
    <meta name="description" content="Available courses at SheCanMoney" />
</svelte:head>

<div class="relative flex justify-center items-center min-h-screen md:p-8">
    <div class="md:p-8 w-full md:w-2/3">
        <div class="min-h-[100vh] h-full flex flex-col">
        <h2 class="text-2xl font-bold mb-4">Your courses</h2>
        <div class="grid grid-cols-5 gap-4 mb-8">
            <button on:click={()=> goto("/savings")} class="p-8 bg-pink-200 border rounded-lg shadow-md hover:bg-pink-300">Savings</button>
            <button class="p-8 bg-green-200 border rounded-lg shadow-md hover:bg-green-300">Property</button>
            <button class="p-8 bg-blue-200 border rounded-lg shadow-md hover:bg-blue-300">Investing</button>
            <button class="p-8 bg-yellow-200 border rounded-lg shadow-md hover:bg-yellow-300">Pensions</button>
            <button class="p-8 bg-teal-200 border rounded-lg shadow-md hover:bg-teal-300">Insurance</button>
            <button class="p-8 bg-orange-200 border rounded-lg shadow-md hover:bg-orange-300">Loans&Credit</button>
            <button class="p-8 bg-gray-200 border rounded-lg shadow-md hover:bg-gray-300">Pay Gap</button>
            <button class="p-8 bg-indigo-200 border rounded-lg shadow-md hover:bg-indigo-300">Benefits</button>
            <button class="p-8 bg-purple-200 border rounded-lg shadow-md hover:bg-purple-300">Deals&Shopping</button>
            <button class="p-8 bg-cyan-200 border rounded-lg shadow-md hover:bg-cyan-300">Business</button>
        </div>
    </div>
    </div>
</div>
