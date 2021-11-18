<template>
    <div>
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
            <h2 class="font-semibold text-gray-200">Stagioni</h2>
            <router-link :to="{ name: 'Tv.Season.index', params: { id: show.id }}" class="block text-gray-500 hover:text-light-blue transition duration-200 text-sm">
                Visualizza tutte le stagioni ({{ show.seasons.length}})
            </router-link>
        </div>

        <div class="flex space-x-6 overflow-x-auto overflow-y-hidden pb-24">
            <router-link
                v-for="season in seasons"
                :key="season.id"
                :to="{ name: 'Tv.Season.show', params: { id: show.id, number: season.season_number }}"
                class="h-72 w-52 flex-none rounded-lg hover:shadow-2xl transition duration-200">
                    <img
                        :src="image(season.poster_path)"
                        :alt="season.name + '_poster'"
                        class="rounded-lg w-full h-full object-cover">

                    <div class="text-sm mt-2">
                        <h4 class="font-semibold text-gray-200">{{ season.name }}</h4>
                        <p class="text-gray-400">Messa in onda {{ $moment(season.air_date).format('DD/MM/YYYY') }}</p>
                        <p class="text-gray-400">{{ season.episode_count }} episodi</p>
                    </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tv.Seasons',
    props: ['show'],
    computed: {
        seasons() {
            return this.show.seasons.filter(season => {
                return season.season_number > 0 && season.season_number < 12
            })
        }
    },
    methods: {
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