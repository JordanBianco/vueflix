<template>
    <div>
        <div
        :class="{ '-translate-x-110' : !isOpen }"
        class="z-50 fixed bottom-0 top-0 w-64 bg-gray-800 transition duration-200 transform ease-in-out">

            <header class="py-2.5 px-6 border-b border-gray-700">
                <router-link
                    @click.native="toggleSidebar"
                    :to="{ name:'Home' }">
                        <h1 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-green to-light-blue">Vueflix</h1>
                </router-link>
            </header>

            <section class="mt-6 space-y-6 text-sm overflow-y-auto">
                <!-- Movie Section -->
                <section>
                    <div class="px-6 mb-2 text-gray-500">
                        <h2 class=" text-sm uppercase">Film</h2>
                    </div>
                    <div>
                        <router-link
                            @click.native="toggleSidebar"
                            exact-active-class="text-light-blue"
                            class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                            :to="{ name: 'Movie.popular' }">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                <span>Film popolari</span>
                        </router-link>

                        <router-link
                            @click.native="toggleSidebar"
                            exact-active-class="text-light-blue"
                            class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                            :to="{ name: 'Movie.nowPlaying' }">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21,2a1,1,0,0,0-1,1V5H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V5H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V19H6v2a1,1,0,0,0,2,0V20h8v1a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2ZM6,17H4V15H6Zm0-4H4V11H6ZM6,9H4V7H6Zm10,9H8V13h8Zm0-7H8V6h8Zm4,6H18V15h2Zm0-4H18V11h2Zm0-4H18V7h2Z"/></svg>
                                <span>Ora al cinema</span>
                        </router-link>

                        <router-link
                            @click.native="toggleSidebar"
                            exact-active-class="text-light-blue"
                            class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                            :to="{name: 'Movie.upcoming'}">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.71,7.29A1,1,0,1,0,7.29,8.71L10.59,12l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,0-1.42ZM16,7a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V8A1,1,0,0,0,16,7Z"/></svg>
                                <span>Prossime uscite</span>
                        </router-link>

                        <router-link
                            @click.native="toggleSidebar"
                            exact-active-class="text-light-blue"
                            class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                            :to="{name: 'Movie.topRated'}">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z"/></svg>
                                <span>Film più votati</span>
                        </router-link>
                    </div>
                </section>

                <!-- Streaming Section -->
                <section>
                    <div class="px-6 mb-2 text-gray-500">
                        <h2 class=" text-sm uppercase">Serie TV</h2>
                    </div>
                    <div>
                        <router-link
                            @click.native="toggleSidebar"
                            exact-active-class="text-light-blue"
                            class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                            :to="{ name: 'Tv.popular' }">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                <span>Serie popolari</span>
                        </router-link>

                        <router-link
                            @click.native="toggleSidebar"
                            exact-active-class="text-light-blue"
                            class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                            :to="{ name: 'Tv.nowPlaying' }">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/></svg>
                                <span>Adesso in onda</span>
                        </router-link>

                        <router-link
                            @click.native="toggleSidebar"
                            exact-active-class="text-light-blue"
                            class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                            :to="{name: 'Tv.topRated'}">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z"/></svg>
                                <span>Serie più votate</span>
                        </router-link>
                    </div>
                </section>

                <section>
                    <router-link
                        @click.native="toggleSidebar"
                        exact-active-class="text-light-blue"
                        class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                        :to="{name: 'Genre.index'}">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                            <span>Tutti i generi</span>
                    </router-link>

                    <!-- <router-link
                        @click.native="toggleSidebar"
                        exact-active-class="text-light-blue"
                        class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                        :to="{name: 'Tv.topRated'}">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M18.97021,19.75732,15.34912,5.27246A2.9958,2.9958,0,0,0,12.43848,3h-.877A2.9958,2.9958,0,0,0,8.65088,5.27246L5.02979,19.75732a1.0001,1.0001,0,0,0,1.94042.48536L8.28082,15h7.43836l1.31061,5.24268a1.0001,1.0001,0,0,0,1.94042-.48536ZM8.78082,13l1.81049-7.24219A.99825.99825,0,0,1,11.56152,5h.877a.99825.99825,0,0,1,.97021.75781L15.21918,13Z"/></svg>
                            <span>Lista A-Z</span>
                    </router-link>

                    <router-link
                        @click.native="toggleSidebar"
                        exact-active-class="text-light-blue"
                        class="w-full flex items-center space-x-3 py-2 px-6 text-gray-200 hover:bg-gray-700 transition duration-150"
                        :to="{name: 'Tv.topRated'}">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>
                            <span>Anno</span>
                    </router-link> -->
                </section>
            </section>

            <div class="fixed bottom-0 bg-gray-700 left-0 right-0 py-4 text-xs text-gray-200">
                <p class="text-center mb-3.5">Unicons by <a href="https://iconscout.com/">Iconscout</a></p>
                <img
                    class="w-2/3 mx-auto"
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
                    alt="tmdb_logo">
            </div>
        </div>
        
        <!-- Overlay -->
        <div
            v-if="isOpen"
            @click="toggleSidebar"
            :class="{ 'bg-black inset-0 opacity-60 fixed z-40' : isOpen }"></div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    computed: {
        isOpen() {
            return this.$store.state.sidebar.isOpen;
        },
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch('sidebar/toggleSidebar')
        },
    }
}
</script>