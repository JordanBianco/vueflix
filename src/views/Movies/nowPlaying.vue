<template>
    <div>
        <Shows 
            :title="'Ora al cinema'"
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
    name: 'Movies.nowPlaying',
    components: {
        Shows,
    },
    data() {
        return {
            page: 1,
            genre: ''
        }
    },
    mounted() {
        this.getNowPlayingMovies();
    },
    watch: {
        page: function() {
            this.getNowPlayingMovies();
        },
        genre: function() {
            this.page = 1
            this.getNowPlayingMovies();
        },
    },
    computed: {
        movies() {
            return this.$store.state.movies.movies;
        }
    },
    methods: {
        getNowPlayingMovies() {
            this.$store.dispatch('movies/getNowPlayingMovies', {
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