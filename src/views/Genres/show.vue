<template>
    <div>
        <header
            v-if="shows"
            :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(to right, rgba(12, 12, 12, 1), rgba(111, 51, 155, 0.7)), url(https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)'"
            class="px-6 lg:pt-16 lg:pb-10 py-20 lg:px-12 shadow-2xl">
                <h2 class="text-gray-200 text-xl lg:text-2xl">{{ $route.query.name }}</h2>
        </header>

        <section class="p-6 pt-8 lg:px-12">
            <!-- Header pagination and movie/series switch -->
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between text-sm lg:text-xs">
                <div class="mb-4 lg:mb-0 xl:w-1/4">
                    <div class="text-gray-400 flex space-x-2 items-center">
                        <p>Pagina {{ shows.page }} di {{ shows.total_pages }}</p>
                        <p class="text-2xl mb-1">&bull;</p>
                        <p>{{ shows.total_results }} risultati</p>
                    </div>
                </div>

                <div class="space-y-3 lg:space-y-0 lg:flex lg:space-x-4 xl:w-3/4 xl:justify-end">
                    <!-- Switch Media Type -->
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-2 lg:max-w-max">
                        <h4 class="text-gray-200 mb-0.5">Media</h4>
                        <select v-model="media" class="focus:border-light-blue focus:outline-none bg-transparent text-gray-400 rounded-lg p-1 border border-gray-700">
                            <option class="bg-gray-800" selected value="movies">Film</option>
                            <option class="bg-gray-800" value="tv">Serie</option>
                        </select>
                    </div>

                    <!-- Ordina per -->
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-2 lg:max-w-max">
                        <h4 class="text-gray-200 mb-0.5">Ordina per</h4>
                        <select v-model="sort" class="focus:border-light-blue focus:outline-none bg-transparent text-gray-400 rounded-lg p-1 border border-gray-700">
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
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-2 lg:max-w-max">
                        <h4 class="text-gray-200 mb-0.5">Numero minimo di voti</h4>
                        <select v-model="voteCount" class="focus:border-light-blue focus:outline-none bg-transparent text-gray-400 rounded-lg p-1 border border-gray-700">
                            <option class="bg-gray-800" selected value="0">0</option>
                            <option class="bg-gray-800" value="100">100</option>
                            <option class="bg-gray-800" value="300">300</option>
                            <option class="bg-gray-800" value="500">500</option>
                            <option class="bg-gray-800" value="700">700</option>
                            <option class="bg-gray-800" value="1000">1000</option>
                        </select>
                    </div>
                </div>
            </div>

            <div style="height: 1px;" class="w-full bg-gray-700 mt-6 mb-10"></div>

            <section v-if="shows.results.length > 0" class="grid lg:grid-cols-2 gap-10">
                <div v-for="show in shows.results" :key="show.id">
                    <div class="relative md:h-96">
                        <router-link
                            :to="{  name: show.first_air_date ? 'Tv.show' : 'Movie.show', params: {id: show.id }}"
                            class="md:flex shadow-xl hover:shadow-2xl rounded-lg md:h-96">
                                <div class="flex-shrink-0 w-full md:w-2/5">
                                    <img
                                        :src="image(show.poster_path)"
                                        alt="show_image"
                                        class="shadow-2xl object-cover w-full rounded-t-lg md:rounded-r-none md:rounded-l-lg h-full">
                                </div>
                                
                                <div class="p-4 md:w-3/5 border border-gray-750 borderl-l-0 rounded-b-lg md:rounded-r-lg">
                                    <h4 class="text-sm text-gray-200 font-semibold">{{ show.first_air_date ? show.name : show.title }}</h4>
                                    <p class="text-sm text-gray-500">{{ show.first_air_date ? $moment(show.first_air_date).format('DD/MM/YYYY') : $moment(show.release_date).format('DD/MM/YYYY') }}</p>
                                    <p class="text-gray-400 text-sm mt-4">{{ show.overview | truncate(320) }}</p>
                                </div>

                                <!-- Avg -->
                                <div
                                    :class="'border-' + avgColor(show) + '-500 text-' + avgColor(show) + '-500'"
                                    class="bg-gray-900 border-3 font-semibold text-sm flex justify-center items-center w-11 h-11 lg:w-12 lg:h-12 shadow-xl rounded-full absolute left-2 top-2">
                                        {{ avg(show) }} <small>%</small>
                                </div>
                        </router-link>
                    </div>
                </div>
            </section>
            <div v-else class="text-gray-400 text-center py-20">
                Nessun elemento in questa lista.
            </div>

            <ThePagination
                @prevPage="prevPage"
                @nextPage="nextPage"
                :shows="shows"
                :page="page"
            />
        </section>
    </div>
</template>

<script>
import ThePagination from '@/components/Layout/ThePagination'

export default {
    name: 'Genres.show',
    components: {
        ThePagination
    },
    mounted() {
        this.getGenreMovies();
    },
    data() {
        return {
            page: 1,
            media: 'movies',
            sort: 'popularity.desc',
            voteCount: 0
        }
    },
    watch: {
        page: function() {
            if (this.media == 'movies') {
				this.getGenreMovies()
			} else {
				this.getGenreShows()
			}
        },
        media: function() {
            if (this.media == 'movies') {
				this.getGenreMovies()
			} else {
				this.getGenreShows()
			}
        },
        sort: function() {
            if (this.media == 'movies') {
				this.getGenreMovies()
			} else {
				this.getGenreShows()
			}
        },
        voteCount: function() {
            if (this.media == 'movies') {
				this.getGenreMovies()
			} else {
				this.getGenreShows()
			}
        },
    },
    computed: {
        shows() {
            return this.$store.state.genres.shows;
        },
    },
    methods: {
        getGenreMovies() {
            this.$store.dispatch('genres/getGenreMovies', {
                id: this.$route.params.id,
                page: this.page,
                sort: this.sort,
                voteCount: this.voteCount
            })
        },
        getGenreShows() {
            this.$store.dispatch('genres/getGenreShows', {
                id: this.$route.params.id,
                page: this.page,
                sort: this.sort,
                voteCount: this.voteCount
            })
        },
        image(path) {
            if (path) {
                return 'https://image.tmdb.org/t/p/w500/' + path
            }
        },
        nextPage() {
            this.page = this.page + 1
            window.scrollTo(0, 0);
        },
        prevPage() {
            window.scrollTo(0, 0);
            this.page = this.page - 1
        },
        change(value) {
            this.media = value
            this.page = 1

            if (this.media == 'movies') {
				this.getGenreMovies()
			} else {
				this.getGenreShows()
			}
        },
        avg(show) {
            let avg = show.vote_average * 10;
            if (avg == 100) {
                return avg.toString().substring(0, 3)
            } else {
                return avg.toString().substring(0, 2) // recommendations api bug? it return 4 + digits instead of 2
            }
		},
		avgColor(show) {
			if (this.avg(show) >= 70 && this.avg(show) <= 100) {
				return 'c-green';
			} else if (this.avg(show) >= 51 && this.avg(show) <= 69) {
				return 'yellow'
			} else if (this.avg(show) <= 50 && this.avg(show) >= 1) {
				return 'red'
			} else if (this.avg(show) == 0) {
				return 'gray'
			}
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