<template>
    <div>
        <div v-if="show">
            <header class="md:px-6 md:pt-20 pb-16 lg:px-12 shadow-2xl bg-gradient-to-r from-gray-900 to-gray-750 md:flex md:space-x-6">
                <div class="flex-shrink-0">
                    <img
                        :src="image(show.poster_path)"
                        :alt="show.name + '_poster'"
                        class="w-full md:w-40 md:rounded-lg">
                </div>
                <div class="p-6 md:p-0">
                    <h2 class="font-semibold text-gray-200 text-2xl">{{ show.name }}</h2>
                    <p class="text-gray-400 text-sm">Messa in onda {{ $moment(show.first_air_date).format('DD/MM/YYYY') }}</p>
                </div>
            </header>
        </div>

        <div class="p-6 lg:px-12 pb-12">
            <h3 class="font-semibold text-gray-200 text-lg mb-4" v-if="show.seasons">{{ show.seasons.length }} stagioni</h3>
            
            <section class="flex flex-col space-y-8">
                <router-link
                    :to="{ name: 'Tv.Season.show', params: { 
                        id: show.id,
                        number: season.season_number 
                    }}"
                    v-for="season in show.seasons"
                    :key="season.id"
                    class="md:flex md:items-center shadow-2xl rounded-lg">
                        <div class="flex-shrink-0 w-full md:w-56">
                            <img
                                :src="image(season.poster_path)"
                                alt="show_image"
                                class="shadow-2xl object-cover w-full rounded-l-lg">
                        </div>
                        
                        <div class="p-4 md:w-2/3 lg:w-full">
                            <h4 class="text-lg text-gray-200 font-semibold">{{ season.name }}</h4>
                            <div class="flex items-center space-x-2 text-gray-400 text-sm">
                                <p>Messa in onda {{ $moment(season.first_air_date).format('DD/MM/YYYY') }}</p>
                                <span class="text-lg mb-1">&bull;</span>
                                <p>Episodi {{ season.episode_count }}</p>
                            </div>
                            <p class="text-gray-400 text-sm mt-2">{{ season.overview | truncate(280) }}</p>
                        </div>
                </router-link>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Tv.Season.index',
    mounted() {
        this.getShow();
    },
    computed: {
        show() {
            return this.$store.state.tv.show
        },
    },
    methods: {
        getShow() {
            this.$store.dispatch('tv/getShow', {id: this.$route.params.id});
        },
        image(path) {
            if (path) {
                return 'https://image.tmdb.org/t/p/w500/' + path
            } else {
                return 'https://eu.ui-avatars.com/api/?name=' + this.show.name
            }
        },
    }

}
</script>