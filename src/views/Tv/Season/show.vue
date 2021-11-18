<template>
    <div>
        <div v-if="season">
            <header class="md:px-6 md:pt-20 pb-16 lg:px-12 shadow-2xl bg-gradient-to-r from-gray-900 to-gray-750 md:flex md:space-x-6">
                <div class="flex-shrink-0">
                    <img
                        :src="image(season.poster_path)"
                        :alt="season.name + '_poster'"
                        class="w-full md:w-56 md:rounded-lg">
                </div>
                <div class="p-6 md:p-0">
                    <h2 class="font-semibold text-gray-200 text-2xl">{{ season.name }}</h2>
                    <p class="text-gray-400 text-sm">Messa in onda {{ $moment(season.air_date).format('DD/MM/YYYY') }}</p>
                    
                    <p class="text-gray-300 mt-6">{{ season.overview }}</p>
                </div>
            </header>

            <div class="p-6 lg:px-12 pb-12">
                <h3 class="font-semibold text-gray-200 text-lg mb-4" v-if="season.episodes">{{ season.episodes.length }} episodi</h3>

                <div
                    v-for="(episode, index) in season.episodes"
                    :key="index"
                    @click="open(index)"
                    class="flex justify-between items-start border-b border-gray-700 py-5 cursor-pointer">
                        <div>
                            <div class="flex items-center space-x-2 text-gray-400 text-sm">
                                <p>Episodio {{ episode.episode_number }}</p>
                                <span class="text-lg mb-1">&bull;</span>
                                <p>{{ $moment(episode.air_date).format('DD/MM/YYYY') }}</p>
                            </div>
                            <h4 class="text-gray-200 font-semibold">{{ episode.name }}</h4>

                            <div v-if="selectedIndex == index" class=" cursor-default py-2 flex flex-col md:flex-row md:items-center md:space-x-4  lg:space-x-6">

                                <div class="flex-none w-full md:w-1/3">
                                    <img
                                        :src="image(episode.still_path)"
                                        alt="episode_image"
                                        class="shadow-2xl object-cover w-full h-full rounded-lg">
                                </div>

                                <section class="text-sm pr-10">
                                    <div class="flex items-center space-x-6 my-3">
                                        <!-- Ratings -->
                                        <div class="flex items-center space-x-1">
                                            <svg class="w-5 h-5 text-light-blue mb-1 flex-none" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                            <div class="flex items-baseline justify-center space-x-1">
                                                <span class="text-gray-200 font-semibold">{{ avg(episode) }}</span>
                                                <span class="block text-xs text-gray-400">/100</span>
                                            </div>
                                        </div>

                                        <!-- Vote Count -->
                                        <div class="flex items-center space-x-1">
                                            <svg class="w-5 h-5 text-light-blue mb-1 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"/></svg>
                                            <span class="text-gray-200 text-center block">{{ episode.vote_count }} voti</span>
                                        </div>
                                    </div>

                                    <p class="text-gray-400 text-sm">{{ episode.overview }}</p>
                                </section>
                            </div>
                        </div>
                        <div class="pt-2">
                            <svg
                                :class="[ selectedIndex == index ? 'rotate-90 text-light-blue hover:text-light-blue' : '' ]"
                                class="w-6 h-6 text-gray-400 hover:text-gray-200 transform transition duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tv.Season.show',
    mounted() {
        this.getSeason();
    },
    data() {
        return {
            selectedIndex: -1
        }
    },
    computed: {
        season() {
            return this.$store.state.seasons.season
        }
    },
    methods: {
        getSeason() {
            this.$store.dispatch('seasons/getSeason', {
                id: this.$route.params.id,
                number: this.$route.params.number,
            })
        },
        image(path) {
            if (path) {
                return 'https://image.tmdb.org/t/p/w500/' + path
            } else {
                return 'https://eu.ui-avatars.com/api/?name=' + this.season.name
            }
        },
        avg(episode) {
            let avg = episode.vote_average * 10;
            if (avg == 100) {
                return avg.toString().substring(0, 3)
            } else {
                return avg.toString().substring(0, 2) // recommendations api bug? it return 4 + digits instead of 2
            }
		},
        open(index) {
            if (this.selectedIndex == index) {
                this.selectedIndex = -1
            } else {
                this.selectedIndex = index
            }
        }
    },
}
</script>