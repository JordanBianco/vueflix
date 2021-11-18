<template>
    <div>
        <header
            :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(to right, rgba(36, 11, 54, 0.8), rgba(195, 20, 50, 0.8)), url(https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)'"
            class="px-6 lg:pt-16 lg:pb-10 py-20 lg:px-12 shadow-2xl">
                <h2 class="text-gray-200 font-semibold text-2xl lg:text-3xl">{{ title }}</h2>
        </header>

        <div class="p-6 lg:px-12">
            <!-- Pagination Data -->
            <div class="flex flex-col mb-6">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-700 mb-4 py-2 text-sm w-full">
                    <!-- Pagination Data -->
                    <div v-if="shows.results.length > 0"  class="text-gray-400 flex space-x-2 items-center mb-4 md:mb-0">
                        <p>Pagina {{ shows.page }} di {{ shows.total_pages }}</p>
                        <p class="text-2xl mb-1">&bull;</p>
                        <p>{{ shows.total_results }} risultati</p>
                    </div>

                    <!-- Filter -->
                    <div @click="toggleFilters" class="flex items-center space-x-4 cursor-pointer">
                        <div class="flex items-center space-x-1 text-gray-400">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/></svg>
                            <span>Filtri</span>
                        </div>
                        <div>
                            <svg
                                :class="[ isOpenFilters ? 'rotate-90 text-light-blue hover:text-light-blue' : '' ]"
                                class="w-5 h-5 text-gray-400 hover:text-gray-200 transform transition duration-150 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                        </div>
                    </div>
                </div>

                <div v-if="isOpenFilters" class="flex flex-col space-y-3 md:space-y-0 xs:flex-row xs:items-center xs:space-x-4 lg:justify-end">
                    <!-- Ordina per -->
                    <div v-if ="$route.path === '/movie/popular' || $route.path === '/tv/popular'" class="flex flex-col lg:flex-row lg:items-center lg:space-x-2 md:w-full lg:max-w-max">
                        <h4 class="text-gray-200 text-sm mb-0.5">Ordina per</h4>
                        <select @change="sortBy" v-model="sort" class="focus:border-light-blue focus:outline-none bg-transparent text-gray-400 rounded-lg p-1 text-sm border border-gray-700">
                            <option class="bg-gray-800" disabled selected value>seleziona un opzione</option>
                            <option class="bg-gray-800" value="original_title.asc">Titolo A-Z</option>
                            <option class="bg-gray-800" value="original_title.desc">Titolo Z-A</option>
                            <option class="bg-gray-800" value="popularity.desc">Popolarità decrescente</option>
                            <option class="bg-gray-800" value="popularity.asc">Popolarità crescente</option>
                            <option class="bg-gray-800" value="vote_average.desc">Valutazione decrescente</option>
                            <option class="bg-gray-800" value="vote_average.asc">Valutazione crescente</option>
                            <option class="bg-gray-800" value="vote_count.desc">Numero Voti decrescente</option>
                            <option class="bg-gray-800" value="vote_count.asc">Numero Voti crescente</option>
                        </select>
                    </div>

                    <!-- Numero minimo di voti -->
                    <div v-if ="$route.path === '/movie/popular' || $route.path === '/tv/popular'" class="flex flex-col lg:flex-row lg:items-center lg:space-x-2 md:w-full lg:max-w-max">
                        <h4 class="text-gray-200 text-sm mb-0.5">Numero minimo di voti</h4>
                        <select @change="setVoteCount" v-model="voteCount" class="focus:border-light-blue focus:outline-none bg-transparent text-gray-400 rounded-lg p-1 text-sm border border-gray-700">
                            <option class="bg-gray-800" selected value="0">0</option>
                            <option class="bg-gray-800" value="100">100</option>
                            <option class="bg-gray-800" value="300">300</option>
                            <option class="bg-gray-800" value="500">500</option>
                            <option class="bg-gray-800" value="700">700</option>
                            <option class="bg-gray-800" value="1000">1000</option>
                        </select>
                    </div>

                    <!-- Filtra per -->
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-2 md:w-full lg:max-w-max">
                        <h4 class="text-gray-200 text-sm mb-0.5">Filtra per</h4>
                        <!-- Generi dei film -->
                        <select v-if="$route.path === '/movie/popular'" @change="filterGenre" v-model="selectedGenre" class="focus:border-light-blue focus:outline-none bg-transparent text-gray-400 rounded-lg p-1 text-sm border border-gray-700">
                            <option class="bg-gray-800" selected value>nessun genere</option>
                            <option class="bg-gray-800" v-for="genre in movieGenres.genres" :key="genre.id" :value="genre.id">
                                {{ genre.name }}
                            </option>
                        </select>
                        <!-- Generi delle serie -->
                        <select v-else @change="filterGenre" v-model="selectedGenre" class="bg-transparent text-gray-400 rounded-lg p-1 text-sm border border-gray-700">
                            <option class="bg-gray-800" selected value>nessun genere</option>
                            <option class="bg-gray-800" v-for="genre in tvGenres.genres" :key="genre.id" :value="genre.id">
                                {{ genre.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div v-if="shows.results.length > 0" class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-20 gap-x-6">
                <section v-for="show in shows.results" :key="show.id">
                    <ShowCover :show="show"/>
                </section>
            </div>
            <div v-else class="text-gray-400 text-center py-20">
                Nessun elemento corrisponde alla tua ricerca.
            </div>
            
            <ThePagination
                @prevPage="prevPage"
                @nextPage="nextPage"
                :shows="shows"
                :page="page"
            />
        </div>
    </div>
</template>

<script>
import ShowCover from '@/components/ShowCover'
import ThePagination from '@/components/Layout/ThePagination'

export default {
    name: 'Shows',
    props: ['title', 'shows', 'page'],
    components: {
        ShowCover,
        ThePagination
    },
    mounted() {
        this.getMovieGenres();
        this.getTvGenres();
    },
    data() {
        return {
            randId: 0,
            sort: '',
            isOpenFilters: false,
            selectedGenre: '',
            voteCount: 0,
        }
    },
    computed: {
        movieGenres() {
            return this.$store.state.genres.movieGenres
        },
        tvGenres() {
            return this.$store.state.genres.tvGenres
        },
    },
    methods: {
        getMovieGenres() {
            this.$store.dispatch('genres/getMovieGenres')
        },
        getTvGenres() {
            this.$store.dispatch('genres/getTvGenres')
        },
        prevPage() {
            window.scrollTo(0, 0);
            this.$emit('prevPage')
        },
        nextPage() {
            window.scrollTo(0, 0);
            this.$emit('nextPage')
        },
        sortBy() {
            this.$emit('sortBy', this.sort)
        },
        setVoteCount() {
            this.$emit('setVoteCount', this.voteCount)
        },
        filterGenre() {
            this.$emit('filterGenre', this.selectedGenre)
        },
        toggleFilters() {
            this.isOpenFilters = ! this.isOpenFilters
        }
    }
}
</script>