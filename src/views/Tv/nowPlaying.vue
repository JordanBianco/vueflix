<template>
    <div>
        <Shows 
            :title="'Adesso in onda'"
            :shows="shows"
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
    name: 'Shows.popular',
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
        this.getNowPlayingShows();
    },
    watch: {
        page: function() {
            this.getNowPlayingShows();
        },
        genre: function() {
            this.page = 1
            this.getNowPlayingShows();
        },
    },
    computed: {
        shows() {
            return this.$store.state.tv.shows;
        }
    },
    methods: {
        getNowPlayingShows() {
            this.$store.dispatch('tv/getNowPlayingShows', {
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