<template>
    <header
        :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(to right, rgba(12, 12, 12, 1), rgba(29, 78, 216, 0.6)), url(' + backdropUrl() + ')'"
        class="px-6 sm:px-12 py-44 text-gray-200 shadow-2xl">
            <h2 class="text-4xl sm:text-5xl font-bold mb-2">Benvenuto</h2>
            <p class="text-xl sm:text-2xl lg:text-2xl leading-tight font-semibold">Milioni di film, serie TV e persone da scoprire. Esplora ora</p>

            <SearchShows />
    </header>
</template>

<script>
import SearchShows from '@/components/SearchShows'

export default {
    name: 'Header',
    props: ['trending'],
    components: {
        SearchShows
    },
    data() {
        return {
            radnId: 0,
        }
    },
    methods: {
        backdropUrl() {
            if (this.trending.results) {
                this.randId = Math.floor(Math.random() * this.trending.results.length);

                let backdrop = this.trending.results[this.randId].backdrop_path
                if (backdrop) {
                    return 'https://image.tmdb.org/t/p/original' + backdrop
                } else {
                    return 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                }
            }
        },
    }
}
</script>