<template>
    <nav class="bg-transparent absolute top-0 w-full">
        <div class="flex items-center justify-between text-gray-100 px-6 py-4 lg:px-12">
            <div class="flex-shrink-0">
                <svg
                    @click="toggleSidebar"
                    class="w-6 h-6 text-gray-200 cursor-pointer hover:text-gray-400 transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
            </div>

            <div class="absolute right-6 lg:right-12 top-4 w-44">
                <input
                    type="text"
                    v-model="query"
                    @keyup.enter="searchShow"
                    placeholder="Cerca film o serie tv..."
                    :class="[ !isOpen ? 'w-0 py-1.5' : 'w-full xs:w-96 px-3 py-1.5']"
                    class="text-sm absolute right-6 -top-1 transform ease-in-out duration-300 bg-black bg-opacity-40 rounded-lg focus:outline-none text-gray-200 placeholder-gray-300">
                
                    <svg
                        @click="openSearch"
                        class="text-gray-200 w-5 h-5 absolute right-0 top-0.5 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isOpen: false,
            query: ''
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch('sidebar/toggleSidebar')
        },
        openSearch() {
            this.isOpen = ! this.isOpen
        },
        searchShow() {
            this.$router.push({ name: 'Search.index', query: { query: this.query } });
            this.isOpen = false
        }
    }
}
</script>