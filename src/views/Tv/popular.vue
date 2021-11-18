<template>
    <div>
        <Shows 
            :title="'Serie TV popolari'"
            :shows="shows"
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
    name: 'Shows.popular',
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
        this.getPopularShows();
    },
    watch: {
        page: function() {
            this.getPopularShows();
        },
        sort: function() {
            this.page = 1
            this.getPopularShows();
        },
        genre: function() {
            this.page = 1
            this.getPopularShows();
        },
        voteCount: function() {
            this.page = 1
            this.getPopularShows();
        },
    },
    computed: {
        shows() {
            return this.$store.state.tv.shows;
        }
    },
    methods: {
        getPopularShows() {
            this.$store.dispatch('tv/getPopularShows', {
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