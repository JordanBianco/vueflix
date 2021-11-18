<template>
    <div>
        <Shows 
            :title="'Film più votati'"
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
    name: 'Movies.topRated',
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
        this.getTopRatedMovies();
    },
    watch: {
        page: function() {
            this.getTopRatedMovies();
        },
        genre: function() {
            this.page = 1
            this.getTopRatedMovies();
        },
    },
    computed: {
        movies() {
            return this.$store.state.movies.movies;
        }
    },
    methods: {
        getTopRatedMovies() {
            this.$store.dispatch('movies/getTopRatedMovies', {
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