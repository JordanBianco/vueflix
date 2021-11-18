<template>
    <div>
        <header
            :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(to right, rgba(36, 11, 54, 0.8), rgba(195, 20, 50, 0.8)), url(https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)'"
            class="px-6 pt-16 pb-10 lg:px-12 shadow-2xl">
                <h2 class="text-gray-200 text-xl lg:text-2xl">Tutti i generi</h2>
        </header>

        <div class="p-6 lg:px-12">
            <router-link
                :to="{ name: 'Genre.show', query: { name: genre.name }, params: { id: genre.id }}"
                v-for="genre in movieGenres.genres"
                :key="genre.id"
                class="border-b border-gray-700 py-2 block">
                    <h3 class="text-gray-200">{{ genre.name }}</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Genres.index',
    mounted() {
        this.getMovieGenres();
        this.getTvGenres();
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
    }
}
</script>