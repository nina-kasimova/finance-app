<script lang="ts">
    import Fa from 'svelte-fa'
    import { faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
    const menu = {
        home: { route: "/", label: "Home" },
        blog: { route: "/blog", label: "Blog" },
        about: { route: "/about", label: "About" },
        learning: { route: "/learning", label: "Learning" },
        discussion: { route: "/discussion", label: "Discussion" },
    };
</script>

<div class="w-full bg-white border-b-2 border-gray-200 rounded-lg shadow-md">
    <nav class="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        <!-- Logo  -->
        <div class="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <a href="/">
        <span class="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
          <span>
            <img src="/img/logo.html" alt="N" class="w-8 h-8 rounded-full bg-pink-200" />
          </span>
          <span>SheCanMoney</span>
        </span>
            </a>
        </div>

        <!-- Menu -->
        <div class="hidden text-center lg:flex lg:items-center">
            <ul class="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                <li class="mr-3 nav__item">
                    <a
                            href={menu["about"].route}
                            class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                    >
                        About
                    </a>
                </li>
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
                            href={menu["discussion"].route}
                            class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                    >
                        Discussion
                    </a>
                </li>
                <li class="mr-3 nav__item">
                    <a
                            href={menu["learning"].route}
                            class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                    >
                        Learning
                    </a>
                </li>
                <li class="mr-3 nav__item flex items-center">
                    <input
                            type="text"
                            placeholder="Search"
                            class="px-4 py-2 text-lg font-normal text-gray-800 no-underline border rounded-md focus:outline-none"
                    />
                    <button class="ml-2">
                        <Fa icon={faSearch} />
                    </button>
                </li>
                <li class="mr-3 nav__item">
                    <button class="focus:outline-none">
                        <Fa icon={faUser} />
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</div>
