<template>
    <section v-if="reviews">
        <h2 class="font-semibold text-gray-200 mb-4">Recensioni</h2>
        <p class="text-gray-400 text-sm">Questa serie ha {{ reviews.total_results }} recensioni</p>
        <div
            v-for="review in reviews.results"
            :key="review.id"
            class="flex lg:space-x-4 space-x-4 mt-8">
                <div class="flex-shrink-0">
                    <img
                        :src="userImage(review.author_details)"
                        :alt="review.author_details.name + '_poster'"
                        class="rounded-lg object-cover lg:w-14 lg:h-14 w-12 h-12">
                </div>
                <div>
                    <h3 class="text-gray-200 font-semibold">{{ review.author_details.name ? review.author_details.name : review.author_details.username }}</h3>
                    <div class="flex items-center flex-wrap text-sm text-gray-400 mb-2">
                        <p class="mr-1">{{ $moment(review.created_at).format('DD/MM/YYYY') }}</p>
                        <p class="text-light-blue" v-if="review.author_details.rating">&bull; ha votato {{ review.author_details.rating }}</p>
                    </div>
                    <p class="text-sm text-gray-400">{{ review.content | truncate(300) }}</p>
                    <router-link
                        :to="{ name: 'Review.show', params: {id: review.id }}"
                        class="text-light-blue text-sm hover:underline"
                        v-if="review.content.length > 300">
                            Continua a leggere...
                    </router-link>
                </div>
        </div>
        <div class="flex items-center justify-between mt-8" v-if="reviews.total_pages > 1">
            <button
                v-if="page > 1"
                @click="prevPage"
                class="bg-gradient-to-r from-light-green to-light-blue rounded-lg text-gray-800 shadow-2xl px-5 py-2 text-sm font-semibold cursor-pointer">Prev</button>
            <span v-else></span>

            <button
                v-if="page < reviews.total_pages"
                @click="nextPage"
                class="bg-gradient-to-r from-light-green to-light-blue rounded-lg text-gray-800 shadow-2xl px-5 py-2 text-sm font-semibold cursor-pointer">
                    Next
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Movie.Reviews',
    props: ['id'],
    mounted() {
        this.getShowReviews();
    },
    data() {
        return {
            page: 1
        }
    },
    watch: {
        page: function() {
            this.getShowReviews()
        }
    },
    computed: {
        reviews() {
            return this.$store.state.tv.reviews;
        },
    },
    methods: {
        getShowReviews() {
            this.$store.dispatch('tv/getShowReviews', {
                id: this.id,
                page: this.page
            });
        },
        userImage(user) {
            if (!user.avatar_path) {
                return 'https://eu.ui-avatars.com/api/?name=' + user.username
            } else if (!user.avatar_path.includes('gravatar')) {
                return 'https://image.tmdb.org/t/p/w500/' + user.avatar_path
            } else {
                return user.avatar_path.slice(1)
            }
        },
        nextPage() {
            this.page = this.page + 1
        },
        prevPage() {
            this.page = this.page - 1
        }
    },
    filters: {
        truncate(text, value) {
            if (text.length > value) {
                return text.substring(0, value) + '...'
            } else {
                return text;
            }
        }
    }
}
</script>