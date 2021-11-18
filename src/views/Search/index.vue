<template>
    <div>
        <header
            v-if="results"
            :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(to right, rgba(12, 12, 12, 1), rgba(249, 55, 35, 0.7)), url(https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)'"
            class="px-6 lg:pt-16 lg:pb-10 py-20 lg:px-12 shadow-2xl">
                <h2 class="text-gray-200 text-xl lg:text-2xl"><span class="text-base mr-2">Hai cercato: </span>"{{ $route.query.query }}"</h2>
        </header>

        <section class="p-6 pt-8 lg:px-12">
            <div class="text-sm lg:text-xs">
                <div class="text-gray-400 flex space-x-2 items-center">
                    <p>Pagina {{ results.page }} di {{ results.total_pages }}</p>
                    <p class="text-2xl mb-1">&bull;</p>
                    <p>{{ results.total_results }} risultati</p>
                </div>
            </div>

            <div style="height: 1px;" class="w-full bg-gray-700 mt-6 mb-10"></div>
            <section v-if="results.results.length > 0" class="grid lg:grid-cols-2 gap-8">
                <div v-for="show in results.results" :key="show.id">
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
                                
                                <div class="p-4 md:w-3/5 md:pt-16 border border-gray-750 border-l-0 rounded-b-lg md:rounded-r-lg">
                                    <h4 class="text-sm text-gray-200 font-semibold">{{ show.first_air_date ? show.name : show.title }}</h4>
                                    <p class="text-sm text-gray-500">{{ show.first_air_date ? $moment(show.first_air_date).format('DD/MM/YYYY') : $moment(show.release_date).format('DD/MM/YYYY') }}</p>
                                    <p class="text-gray-400 text-sm mt-4">{{ show.overview | truncate(280) }}</p>
                                </div>

                                <!-- Avg -->
                                <div
                                    :class="'border-' + avgColor(show) + '-500 text-' + avgColor(show) + '-500'"
                                    class="bg-gray-900 border-3 font-semibold text-sm flex justify-center items-center w-11 h-11 lg:w-12 lg:h-12 shadow-xl rounded-full absolute left-2 top-2">
                                        {{ avg(show) }} <small>%</small>
                                </div>

                                <div class="absolute top-0 right-0 bg-light-blue text-gray-200 px-3 py-1" v-if="show.media_type === 'tv'">
                                    Serie
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
                :shows="results"
                :page="page"
            />
        </section>
    </div>
</template>

<script>
import ThePagination from '@/components/Layout/ThePagination'

export default {
    name: 'Search.index',
    components: {
        ThePagination
    },
    mounted() {
        this.getResults();
        this.getMovieGenres();
    },
    data() {
        return {
            page: 1,
        }
    },
    computed: {
        results() {
            return this.$store.state.search.results
        },
        // movies() {
        //     return this.results.results.filter(r => r.media_type === 'movie')
        // },
        // shows() {
        //     return this.results.results.filter(r => r.media_type === 'tv')
        // },
    },
    watch: {
        "$route.query.query": {
            handler: function() {
                this.getResults();
            },
            deep: true,
            immediate: true,
		},
        page: function() {
            this.getResults()
        },
    },
    methods: {
        getResults() {
            this.$store.dispatch('search/searchShow', {
                query: this.$route.query.query,
                page: this.page,
            })
        },
        image(path) {
            if (path) {
                return 'https://image.tmdb.org/t/p/w500/' + path
            } else {
                return 'https://eu.ui-avatars.com/api/?name=UN'
            }
        },
        nextPage() {
            this.page = this.page + 1
            window.scrollTo(0, 0);
        },
        prevPage() {
            this.page = this.page - 1
            window.scrollTo(0, 0);
        },
        // change(value) {
        //     this.view = value
        //     this.page = 1

        //     if (this.view == 'movies') {
		// 		this.getGenreMovies()
		// 	} else {
		// 		this.getGenreShows()
		// 	}
        // },
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
            if (text) {
                if (text.length > value) {
                    return text.substring(0, value) + '...'
                } else {
                    return text;
                }
            }
        }
    },  
}
</script>