<script>
    import {goto} from "$app/navigation";

    let step = 1;
    let questionStep = 1;
    const steps = [
        { text: "Understanding Your Spending: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel." },
        { text: "Setting Up a Budget: \n\n[Graphic Diagram Placeholder]", image: "/img/budget-chart.jpeg" },
        { text: "Tracking Your Expenses: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel." },
        { text: "Adjusting Your Budget: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel." },
    ];

    const questions = [
        {
            question: "What does the 50/30/20 budget rule stand for?",
            options: [
                "50% on needs, 30% on wants and 20% on savings",
                "50% on wants, 30% on savings and 20% on needs",
                "50% on savings, 30% on needs and 20% on wants",
                "50% on wants, 30% on needs and 20% on savings"
            ],
            correct: 0
        },
        {
            question: "What is the advantage by using this 50/30/20 budget rule?",
            options: [
                "To help people to reach their financial goals by controlling their spending and allocate the money for their savings.",
                "To help individuals manage money and save for emergencies and retirement.",
                "To become aware of your financial habits and limit overspending and under-saving.",
                "All answers are correct."
            ],
            correct: 3
        },
        {
            question: "Groceries, health insurance, water, electricity and house rent is an example of _________.",
            options: [
                "wants",
                "savings",
                "needs",
                "wants and savings"
            ],
            correct: 2
        },
        {
            question: "Which of the following is the WANTs of an individual?",
            options: [
                "Going on vacation",
                "Shopping due to promotion",
                "Buying expensive electronic gadgets, like smartwatch",
                "Digital and streaming services like Netflix"
            ],
            correct: 0
        },
        {
            question: "In case an unforeseen event occurs, like car maintenance. How many months should an individual have saved on for an emergency savings?",
            options: [
                "At least three months of emergency savings.",
                "At least six months of emergency savings.",
                "At least ten months of emergency savings.",
                "All answer is correct."
            ],
            correct: 1
        }
    ];

    function nextStep() {
        if (step < 5) {
            step += 1;
        }
    }

    function prevStep() {
        if (step > 1) {
            step -= 1;
        }
    }

    function checkAnswer(index) {
        if (index === questions[questionStep - 1].correct) {
            if (questionStep < questions.length) {
                questionStep += 1;
            } else {
                goto("/budget-complete")
            }
        } else {
            alert("Incorrect answer, please try again.");
        }
    }
</script>

<svelte:head>
    <title>Budgeting</title>
    <meta name="description" content="Budgeting Steps and Quiz" />
</svelte:head>

<div class="relative flex justify-center items-center min-h-screen md:p-8">
    <div class="md:p-8 w-full md:w-2/3">
        <div class="min-h-[100vh] h-full flex flex-col items-center">
            <h1>Budgeting - 2/12</h1>
            <div class="w-full bg-gray-200 h-4 rounded-full mt-2 mb-8">
                <div class="bg-blue-500 h-4 rounded-full" style="width: {16.67 * step}%;"></div>
            </div>

            {#if step <= 4}
                <div class="flex justify-center items-center">
                    <button class="p-8 border rounded-lg shadow-md hover:bg-blue-200" on:click={prevStep}>←</button>
                    <div class="p-20 bg-green-200 border rounded-lg shadow-md mx-8 text-center w-full md:w-2/3">
                        <div class="text-xl whitespace-pre-line">{steps[step - 1].text}</div>
                        {#if step === 2}
                            <img src={steps[1].image} alt="Graphic Diagram" class="mt-4"/>
                        {/if}
                    </div>
                    <button class="p-8 border rounded-lg shadow-md hover:bg-blue-200" on:click={nextStep}>→</button>
                </div>
            {:else}
                <div class="flex justify-center items-center">
                    <button class="p-8 border rounded-lg shadow-md hover:bg-blue-200" on:click={prevStep}>←</button>
                    <div class="p-20 bg-red-200 border rounded-lg shadow-md mx-8 w-full md:w-2/3">
                        <div class="text-left font-semibold mb-4">{questions[questionStep - 1].question}</div>
                        {#each questions[questionStep - 1].options as option, index}
                            <button class="w-full mb-4 p-4 bg-white border rounded-lg shadow-md hover:bg-blue-200" on:click={() => checkAnswer(index)}>
                                {option}
                            </button>
                        {/each}
                    </div>
                    <button class="p-8 border rounded-lg shadow-md hover:bg-blue-200" on:click={nextStep}>→</button>
                </div>
            {/if}

            <div class="mt-8 flex justify-center space-x-2">
                {#each {length: 4} as _, index}
                    <button class="w-8 h-8 rounded-full {index < step ? 'bg-green-200' : 'bg-gray-200'}"></button>
                {/each}
            </div>
        </div>
    </div>
</div>

