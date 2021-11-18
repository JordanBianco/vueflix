<template>
    <div>
        <div v-if="show">
            <div
                class="md:flex md:space-x-8 md:px-6 md:py-32 lg:space-x-14 lg:px-12" 
                :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(rgba(37, 37, 37, 0.8), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/' + show.backdrop_path">
                    <div class="w-full md:w-2/5 xl:w-1/4">
                        <img
                            :src="image(show)"
                            alt="movie_image"
                            class="shadow-2xl object-cover w-full md:rounded-lg">
                    </div>

                    <div class="p-6 sm:p-0 md:w-3/5 xl:w-3/4">
                        <header>
                            <h2 class="text-gray-200 tracking-tight text-3xl lg:text-4xl leading-none font-semibold">{{ show.name }}</h2>
                            <div class="flex items-center flex-wrap text-gray-300 text-sm">
                                <span>{{ $moment(show.first_air_date).format('DD-MM-YYYY') }}</span>
                                <span class="text-3xl mb-1.5 mx-2">&bull;</span>
                                <div class="flex-wrap text-gray-300 text-sm">
                                    <!-- Genres -->
                                    <div class="flex items-center flex-wrap">
                                        <div v-for="genre in show.genres" :key="genre.id">
                                            <router-link :to="{ name: 'Genre.show', query: { name: genre.name }, params: {id: genre.id}}" class="block mr-2 hover:text-gray-400 transition duration-200">
                                                {{ genre.name }}
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>


                        <div class="my-6 py-3.5 border-t border-b border-gray-600">
                            <div class="w-4/5 md:w-full lg:w-9/12 mx-auto text-sm">
                                <div :class="[ show.homepage ? 'grid-cols-2' : 'grid-cols-3' ]" class="grid sm:grid-cols-4 gap-y-4">
                                    <!-- Ratings -->
                                    <div class="flex flex-col">
                                        <div class="flex justify-center mb-1">
                                            <svg class="w-6 h-6 text-light-blue" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                        </div>
                                        <div class="flex items-baseline justify-center space-x-1">
                                            <span class="text-gray-200 font-semibold">{{ show.vote_average * 10 }}</span>
                                            <span class="block text-xs text-gray-400">/100</span>
                                        </div>
                                    </div>

                                    <!-- Vote Count -->
                                    <div class="flex flex-col">
                                        <div class="flex justify-center mb-1">
                                            <svg class="w-6 h-6 text-light-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"/></svg>
                                        </div>
                                        <span class="text-gray-200 text-center">{{ show.vote_count }} voti</span>
                                    </div>

                                    <!-- Durata -->
                                    <div class="flex flex-col">
                                        <div class="flex justify-center mb-1">
                                            <svg class="w-6 h-6 text-light-blue" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/></svg>
                                        </div>
                                        <span class="text-gray-200 text-center">
                                            {{ show.episode_run_time[0] }}‘
                                        </span>
                                    </div>

                                    <!-- Homepage -->
                                    <a
                                        v-if="show.homepage"
                                        target="_blank"
                                        :href="show.homepage" class="flex flex-col">
                                            <div class="flex justify-center mb-1">
                                                <svg class="w-6 h-6 text-light-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"/></svg>
                                            </div>
                                            <span class="text-gray-200 text-center">Homepage</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <p class="text-gray-400 text-lg italic">{{ show.tagline }}</p>
                        <p class="text-gray-300 my-10">{{ show.overview }}</p>
                    </div>
            </div> <!-- fine flex -->

            <section class="p-6 lg:px-12 sm:py-16 lg:flex lg:space-x-12">
                <!-- Left Side -->
                <div class="lg:w-3/4 space-y-20">
                    <!-- Cast -->
                    <Credits v-if="credits" :actors="actors()" />
               
                    <!-- Seasons -->
                    <!-- <Seasons :lastSeason="lastSeason[0]"/> -->
                    <Seasons :show="show"/>

                    <!-- Reviews -->
                    <Reviews :id="show.id" />

                    <!-- Recommendations -->
                    <Recommendations v-if="recommendations" :recommendations="recommendations" />
                </div>
                
                <!-- Right Side -->
                <div class="lg:w-1/4 pt-10">
                    <!-- SHOW INFO -->
                    <section class="space-y-2.5">
                        <div>
                            <h5 class="text-xs text-gray-500">Creatore</h5>
                            <div
                                v-for="creator in show.created_by"
                                :key="creator.id"
                                class="text-gray-200 text-sm">
                                    {{ creator.name }}
                            </div>
                        </div>
                        <div>
                            <h5 class="text-xs text-gray-500 mb-1">Network</h5>
                            <div v-for="network in show.networks" :key="network.id" class="mb-4">
                                <router-link :to="{ name: 'Network.show', params: {id: network.id }}">
                                    <img
                                        :src="networkImage(network)"
                                        :alt="network.name + '_poster'"
                                        class="h-full w-1/2 md:w-1/8 lg:w-1/3">
                                </router-link>
                            </div>
                        </div>
                        <div>
                            <h5 class="text-xs text-gray-500 mb-1">Titolo originale</h5>
                            <p class="text-gray-200 text-sm leading-tight">{{ show.original_name }}</p>
                        </div>
                        <div>
                            <h5 class="text-xs text-gray-500 mb-1">Stato</h5>
                            <p class="text-gray-200 text-sm">{{ show.status }}</p>
                        </div>
                        <div>
                            <h5 class="text-xs text-gray-500 mb-1">Lingua originale</h5>
                            <p class="text-gray-200 text-sm">{{ show.original_language }}</p>
                        </div>
                    </section>

                    <!-- KEYWORDS -->
                    <Keywords :keywords="keywords" />
                </div>
            </section> 
        </div>
    </div>
</template>

<script>
import Credits from '@/components/Show/Credits' // una sola fonte di codice
import Recommendations from '@/components/Show/Recommendations' // una sola fonte di codice
import Keywords from '@/components/Show/Keywords' // una sola fonte di codice

import Reviews from '@/components/Tv/Reviews' // solo serie
import Seasons from '@/components/Tv/Seasons' // solo serie


export default {
    name: 'Tv.show',
    components: {
        Credits,
        Reviews,
        Recommendations,
        Keywords,
        Seasons
    },
    mounted() {
        this.getShow();
        this.getShowCredits();
        this.getShowRecommendations();
        this.getShowKeywords();
    },
    watch: {
        "$route.params.slug": {
            handler: function() {
                this.getShow();
                this.getShowCredits();
                this.getShowRecommendations();
                this.getShowKeywords();
            },
            deep: true,
            immediate: true,
		},	
    },
    computed: {
        show() {
            return this.$store.state.tv.show;
        },
        credits() {
            return this.$store.state.tv.credits;
        },
        recommendations() {
            return this.$store.state.tv.recommendations;
        },
        keywords() {
            return this.$store.state.tv.keywords;
        },
        lastSeason() {
            let num = this.show.number_of_seasons

            return this.show.seasons.filter(season => {
                return season.season_number === num
            })
        }
    },
    methods: {
        getShow() {
            this.$store.dispatch('tv/getShow', {id: this.$route.params.id});
        },
        getShowCredits() {
            this.$store.dispatch('tv/getShowCredits', {id: this.$route.params.id});
        },
        getShowRecommendations() {
            this.$store.dispatch('tv/getShowRecommendations', {id: this.$route.params.id});
        },
        getShowKeywords() {
            this.$store.dispatch('tv/getShowKeywords', {id: this.$route.params.id});
        },
        image(show) {
            return 'https://image.tmdb.org/t/p/w500/' + show.poster_path
        },
        networkImage(network) {
            return 'https://image.tmdb.org/t/p/original/' + network.logo_path
        },
        actors() {
            if (this.credits.cast) {
                return this.credits.cast.filter(actor => {
                    return actor.order < 8
                });
            }
        },
        
    },
}
</script>