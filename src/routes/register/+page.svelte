<script>

    import {goto} from "$app/navigation";

    let name = '';
    let email = '';
    let password = '';
    let gender = '';
    let aiTool = '';

    function handleSignUp() {
        // Handle form submission logic here (e.g., validation, API calls)
        // For demonstration, redirect to /courses after sign-up
        goto('/learning');
    }
</script>

<svelte:head>
    <title>Registration Form</title>
    <meta name="description" content="Register to SheCanMoney" />
</svelte:head>

<div class="relative flex justify-center items-center min-h-screen p-8">
    <div class="p-8 bg-blue-200 border rounded-lg shadow-md w-full max-w-lg">
        <h2 class="text-2xl font-bold mb-4">Registration Form</h2>
        <form on:submit|preventDefault={handleSignUp}>
            <div class="mb-4">
                <label class="block mb-1" for="name">Name</label>
                <input id="name" type="text" bind:value={name} class="w-full p-2 border rounded-lg" />
            </div>
            <div class="mb-4">
                <label class="block mb-1" for="email">Email</label>
                <input id="email" type="email" bind:value={email} class="w-full p-2 border rounded-lg" />
            </div>
            <div class="mb-4">
                <label class="block mb-1" for="password">Password</label>
                <input id="password" type="password" bind:value={password} class="w-full p-2 border rounded-lg" />
            </div>
            <div class="mb-4">
                <label class="block mb-1">Gender</label>
                <label class="inline-flex items-center">
                    <input type="radio" bind:group={gender} value="female" class="form-radio" />
                    <span class="ml-2">Female</span>
                </label>
                <label class="inline-flex items-center ml-4">
                    <input type="radio" bind:group={gender} value="male" class="form-radio" />
                    <span class="ml-2">Male</span>
                </label>
            </div>
            <div class="mb-4">
                <label class="block mb-1">Would you like to try our AI tool to better define your goals?</label>
                <label class="inline-flex items-center">
                    <input type="radio" bind:group={aiTool} value="yes" class="form-radio" />
                    <span class="ml-2">Yes, please</span>
                </label>
                <label class="inline-flex items-center ml-4">
                    <input type="radio" bind:group={aiTool} value="no" class="form-radio" />
                    <span class="ml-2">No, thanks</span>
                </label>
            </div>
            <button type="submit" class="w-full p-4 bg-green-200 border rounded-lg shadow-md hover:bg-green-300">Sign Up</button>
        </form>
    </div>
</div>
