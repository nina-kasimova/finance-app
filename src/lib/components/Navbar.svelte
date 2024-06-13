<script lang="ts">

    const menu = {
        "home": { route: "/", label: "Home" },
        "blog": { route: "/blog", label: "Blog" },
        "about": { route: "/about", label: "About" },
        "learning": { route: "/learning", label: "Learning" },
        "discussion": { route: "/discussion", label: "Discussion"}
    };
</script>

<div class="w-full">
    <nav
            class="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0"
    >
        <!-- Logo  -->
        <div class="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <a href="/">
				<span class="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
<!--					<span>-->
<!--						<img src="/img/MinefieldLogo2.svg" alt="N" class="w-8" width="32" height="32" />-->
<!--					</span>-->
					<span>SheCanMoney</span>
				</span>
            </a>

        </div>

        <!-- menu -->
        <div class="hidden text-center lg:flex lg:items-center">
            <ul class="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                    <li class="mr-3 nav__item">
                        <a
                                href={menu["blog"].route}
                                class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                        >
                            Blog
                        </a>
                    </li>
                <li class="mr-3 nav__item">
                    <a
                            href={menu['learning'].route}
                            class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                    >
                        Learning
                    </a>
                </li>
                <li class="mr-3 nav__item">
                    <a
                            href={menu['discussion'].route}
                            class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                    >
                        Discussion
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
