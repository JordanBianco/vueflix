<template>
    <div>
        <Shows 
            :title="'Prossime uscite'"
            :shows="movies"
            :page="page"
            @prevPage="prevPage"
            @nextPage="nextPage"
            @filterGenre="filterGenre"
        />
    </div>
</template>

<script>
import Shows from '@/components/Shows'

export default {
    name: 'Movies.upcoming',
    components: {
        Shows
    },
    data() {
        return {
            page: 1,
            genre: ''
        }
    },
    mounted() {
        this.getUpcomingMovies();
    },
    watch: {
        page: function() {
            this.getUpcomingMovies();
        },
        genre: function() {
            this.page = 1
            this.getUpcomingMovies();
        },
    },
    computed: {
        movies() {
            return this.$store.state.movies.movies;
        }
    },
    methods: {
        getUpcomingMovies() {
            this.$store.dispatch('movies/getUpcomingMovies', {
                page: this.page,
                genre: this.genre
            });
        },
        prevPage() {
            this.page = this.page - 1;
        },
        nextPage() {
            this.page = this.page + 1;
        },
        filterGenre(genre) {
            this.genre = genre
        }
    }
}
</script>