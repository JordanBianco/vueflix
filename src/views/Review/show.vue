<template>
    <div>
        <div v-if="review" class="p-6 py-26 lg:px-12">
            <div class="flex space-x-4">
                <div class="flex-shrink-0">
                    <img
                        :src="userImage(review.author_details)"
                        :alt="review.author_details.name + '_poster'"
                        class="rounded-lg object-cover lg:w-16 lg:h-16 w-10 h-10">
                </div>

                <div>
                    <h3 class="text-gray-200 text-lg font-semibold">{{ review.author_details.name ? review.author_details.name : review.author_details.username }}</h3>
                    <div class="flex items-center flex-wrap text-sm text-gray-400 mb-4">
                        <p class="mr-1">{{ $moment(review.created_at).format('DD/MM/YYYY') }}</p>
                        <p class="text-light-blue" v-if="review.author_details.rating">&bull; ha votato {{ review.author_details.rating }}</p>
                    </div>
                    <p class="text-sm text-gray-400">{{ review.content }}</p>
                    <p class="text-gray-300 text-sm mt-16">Recensione di 
                        <router-link
                            class="underline"
                            :to="{ name: review.media_type == 'tv' ? 'Tv.show' : 'Movie.show', params: {id: review.media_id }}">
                                {{ review.media_title }}
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Review.show',
    mounted() {
        this.getReview();
    },
    computed: {
        review() {
            return this.$store.state.reviews.review
        }
    },
    methods: {
        getReview() {
            this.$store.dispatch('reviews/getReview', { id: this.$route.params.id })
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
    }
}
</script>