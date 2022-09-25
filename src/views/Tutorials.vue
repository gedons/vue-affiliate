<template>
    
    <DefaultLayout title="Tutorials">
        <template v-slot:header>
            <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="#" class="flex items-center">
                        <img src="../assets/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Affiliate</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <div class="hidden mt-2 mr-4 sm:inline-block">
                            <a class="github-button" href="https://github.com/themesberg/landwind" data-size="large" data-icon="octicon-star" data-show-count="true" aria-label="Star themesberg/landwind on GitHub">Star</a>
                        </div>
                        <!-- <a href="#" cnlass="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> -->
                        <a href="https://themesberg.com/product/tailwind-css/landing-page" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            
                            <li>
                                <router-link :to="{name: 'Home'}" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</router-link>
                            </li>
                            
                            <li>
                                <router-link :to="{name: 'Tutorials'}" class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Tutorials</router-link>
                            </li>
                           
                            <li>
                                <router-link :to="{name: 'Contact'}" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </template>

        <template v-slot:body>
                    <!-- Start block -->
        <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <!-- Pricing Card -->
                <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$29</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Individual configuration</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Team size: <span class="font-semibold">1 developer</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Premium support: <span class="font-semibold">6 months</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold">6 months</span></span>
                        </li>
                    </ul>
                    <a href="#" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
                </div>
                <!-- Pricing Card -->
                <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Company</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$99</span>
                        <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400>/month</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Individual configuration</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Team size: <span class="font-semibold">10 developers</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Premium support: <span class="font-semibold">24 months</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold">24 months</span></span>
                        </li>
                    </ul>
                    <a href="#" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
                </div>
                <!-- Pricing Card -->
                <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$499</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Individual configuration</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Team size: <span class="font-semibold">100+ developers</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Premium support: <span class="font-semibold">36 months</span></span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold">36 months</span></span>
                        </li>
                    </ul>
                    <a href="#" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
                </div>
            </div>
        </div>
      </section>
    <!-- End block -->

        <!-- Start block -->
        <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div class="max-w-screen-sm mx-auto text-center">
                <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Landwind Platform for 30 days. No credit card required.</p>
                <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Free trial for 30 days</a>
            </div>
        </div>
    </section>
    <!-- End block -->
        </template>
    </DefaultLayout>
   
</template>

<script setup>
    import DefaultLayout from '../components/defaultLayout.vue';
</script>