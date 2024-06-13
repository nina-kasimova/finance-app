<script>
    // You can add any necessary script here
import {goto} from "$app/navigation";
</script>

<svelte:head>
    <title>Savings</title>
    <meta name="description" content="Banking and Savings Courses" />
</svelte:head>

<div class="relative flex justify-center items-center min-h-screen md:p-8">
    <div class="md:p-8 w-full md:w-2/3">
        <div class="min-h-[100vh] h-full flex flex-col">
            <h1 class="text-2xl font-semibold mb-4">Savings</h1>
            <div class="mt-8 flex justify-center space-x-32">
                <button class="p-8 border rounded-lg shadow-md hover:bg-blue-200">Accounts</button>
                <button on:click|preventDefault={()=>goto("/budgeting-course")} class="p-8 border rounded-lg shadow-md hover:bg-blue-300">Budgeting</button>
                <button class="p-8 border rounded-lg shadow-md hover:bg-blue-200">Offers</button>
            </div>
        </div>
    </div>
</div>
