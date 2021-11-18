<template>
    <div>
        <Shows 
            :title="'Film popolari'"
            :shows="movies"
            :page="page"
            @prevPage="prevPage"
            @nextPage="nextPage"
            @sortBy="sortBy"
            @filterGenre="filterGenre"
            @setVoteCount="setVoteCount"
        />
    </div>
</template>

<script>
import Shows from '@/components/Shows'

export default {
    name: 'Movies.popular',
    components: {
        Shows
    },
    data() {
        return {
            page: 1,
            sort: 'popularity.desc',
            genre: '',
            voteCount: 0
        }
    },
    mounted() {
        this.getPopularMovies();
    },
    watch: {
        page: function() {
            this.getPopularMovies();
        },
        sort: function() {
            this.page = 1
            this.getPopularMovies();
        },
        genre: function() {
            this.page = 1
            this.getPopularMovies();
        },
        voteCount: function() {
            this.page = 1
            this.getPopularMovies();
        },
    },
    computed: {
        movies() {
            return this.$store.state.movies.movies;
        }
    },
    methods: {
        getPopularMovies() {
            this.$store.dispatch('movies/getPopularMovies', {
                page: this.page,
                sort: this.sort,
                genre: this.genre,
                voteCount: this.voteCount,
            });
        },
        prevPage() {
            this.page = this.page - 1;
        },
        nextPage() {
            this.page = this.page + 1;
        },
        sortBy(sort) {
            this.sort = sort
        },
        filterGenre(genre) {
            this.genre = genre
        },
        setVoteCount(voteCount) {
            this.voteCount = voteCount
        }
    }
}
</script>