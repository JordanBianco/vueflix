<template>
    <div>
        <Shows 
            :title="'Serie TV più votate'"
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
        this.getTopRatedShows();
    },
    watch: {
        page: function() {
            this.getTopRatedShows();
        },
        genre: function() {
            this.page = 1
            this.getTopRatedShows();
        },
    },
    computed: {
        shows() {
            return this.$store.state.tv.shows;
        }
    },
    methods: {
        getTopRatedShows() {
            this.$store.dispatch('tv/getTopRatedShows', {
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