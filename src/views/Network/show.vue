<template>
    <div v-if="network && shows">
        <header class="px-6 pt-20 pb-16 lg:px-12 shadow-2xl bg-gradient-to-r from-gray-900 to-gray-750">
            <img :src="logo(network)" :alt="network.name + '_logo'" class="w-40">
        </header>

        <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:items-center text-sm text-gray-400 p-6 py-4 lg:px-12 mb-10">
            <h2 v-if="network.name" class="font-semibold text-gray-200 text-xl">{{ network.name }}</h2>
            
            <div v-if="network.headquarters" class="flex items-center space-x-1">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11,11.9V17a1,1,0,0,0,2,0V11.9a5,5,0,1,0-2,0ZM12,4A3,3,0,1,1,9,7,3,3,0,0,1,12,4Zm4.21,10.42a1,1,0,1,0-.42,2C18.06,16.87,19,17.68,19,18c0,.58-2.45,2-7,2s-7-1.42-7-2c0-.32.94-1.13,3.21-1.62a1,1,0,1,0-.42-2C4.75,15.08,3,16.39,3,18c0,2.63,4.53,4,9,4s9-1.37,9-4C21,16.39,19.25,15.08,16.21,14.42Z"/></svg>
                <span>{{ network.headquarters }}</span>
            </div>

            <a v-if="network.homepage" target="_blank" :href="network.homepage" class="flex items-center space-x-1 hover:text-gray-200 transition duration-150">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"/></svg>
                <span>{{ network.homepage }}</span>
            </a>

            <div v-if="network.origin_country" class="flex items-center space-x-1">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z"/></svg>
                <span>{{ network.origin_country }}</span>
            </div>
        </div>

        <div class="text-gray-400 text-sm flex justify-between items-center px-6 lg:px-12">
            <p>Pagina {{ shows.page }} di {{ shows.total_pages }}</p>
            <p>{{ shows.total_results }} risultati</p>
        </div>

        <section class="p-6 lg:px-12 flex flex-col space-y-8">
            <router-link
                :to="{ name: 'Tv.show', params: { id: show.id }}"
                v-for="show in shows.results"
                :key="show.id"
                class="md:flex md:items-center shadow-2xl rounded-lg">
                    <div class="flex-shrink-0 w-full md:w-1/3 lg:w-1/6">
                        <img
                            :src="image(show.poster_path)"
                            alt="show_image"
                            class="shadow-2xl object-cover w-full rounded-l-lg">
                    </div>
                    
                    <div class="p-4 md:w-2/3 lg:w-full">
                        <h4 class="text-sm text-gray-200 font-semibold">{{ show.name }}</h4>
                        <p class="text-sm text-gray-500">{{ $moment(show.first_air_date).format('DD/MM/YYYY') }}</p>
                        <p class="text-gray-400 text-sm mt-2">{{ show.overview | truncate(320) }}</p>
                    </div>
            </router-link>
        </section>

        <ThePagination
            @prevPage="prevPage"
            @nextPage="nextPage"
            :shows="shows"
            :page="page"
        />
    </div>
</template>

<script>
import ThePagination from '@/components/Layout/ThePagination'

export default {
    name: 'Network.show',
    components: {
        ThePagination
    },
    mounted() {
        this.getNetwork();
        this.getNetworkShows();
    },
    data() {
        return {
            page: 1,
        }
    },
    watch: {
        page: function() {
            this.getNetworkShows()
        }
    },
    computed: {
        network() {
            return this.$store.state.networks.network
        },
        shows() {
            return this.$store.state.networks.shows
        },
    },
    methods: {
        getNetwork() {
            this.$store.dispatch('networks/getNetwork', { id: this.$route.params.id })
        },
        getNetworkShows() {
            this.$store.dispatch('networks/getNetworkShows', { 
                id: this.$route.params.id,
                page: this.page    
            })
        },
        logo(network) {
            if (network) {
                return 'https://image.tmdb.org/t/p/original/' + network.logo_path
            }
        },
        image(path) {
            if (path) {
                return 'https://image.tmdb.org/t/p/w500/' + path
            }
        },
        nextPage() {
            window.scrollTo(0, 0);
            this.page = this.page + 1
        },
        prevPage() {
            window.scrollTo(0, 0);
            this.page = this.page - 1
        },
    },
    filters: {
        truncate(text, value) {
            if (text.length > value) {
                return text.substring(0, value) + '...'
            } else {
                return text;
            }
        }
    },  
}
</script>