<template>
    <div>
        <div v-if="collection">
            <div
                class="md:flex md:space-x-8 md:px-6 lg:space-x-14 lg:px-12 md:py-26"
                :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(rgba(37, 37, 37, 0.8), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/' + collection.backdrop_path">
                    <div class="w-full md:w-2/5 xl:w-1/4">
                        <img
                            :src="image(collection.poster_path)"
                            alt="movie_image"
                            class="shadow-2xl object-cover w-full md:rounded-lg">
                    </div>

                    <div class="p-6 md:p-0 md:w-3/5 xl:w-3/4">
                        <header>
                            <h2 class="text-gray-200 tracking-tight text-3xl lg:text-4xl font-semibold">{{ collection.name }}</h2>
                        </header>
                        
                        <p class="text-gray-300 my-10">{{ collection.overview }}</p>

                        <div class="mt-10">
                            <div class="text-sm text-gray-200">
                                <span class="font-semibold">Numero di Film: </span>
                                <span>{{ collection.parts.length }}</span>
                            </div>
                        </div>
                    </div> 
            </div> <!-- fine flex -->

            <div class="p-6 lg:px-12 sm:py-16">
                <h3 class="font-semibold text-gray-200 mb-4">{{ collection.parts.length }} Film</h3>

                <div class="flex flex-col space-y-8">
                    <router-link
                        :to="{ name: 'Movie.show', params: { id: movie.id }}"
                        v-for="movie in collection.parts"
                        :key="movie.id"
                        class="md:flex md:items-center shadow-2xl rounded-lg">
                            <div class="flex-shrink-0 w-full md:w-1/3 lg:w-1/6">
                                <img
                                    :src="image(movie.poster_path)"
                                    alt="movie_image"
                                    class="shadow-2xl object-cover w-full rounded-l-lg">
                            </div>
                            
                            <div class="p-4 md:w-2/3 lg:w-5/6">
                                <h4 class="text-sm text-gray-200 font-semibold">{{ movie.title }}</h4>
                                <p class="text-sm text-gray-500">{{ $moment(movie.release_date).format('DD/MM/YYYY') }}</p>
                                <p class="text-gray-400 text-sm mt-2">{{ movie.overview | truncate(280) }}</p>
                            </div>
                    </router-link>
                </div>
            </div>

            <div v-if="images" class="p-6 lg:px-12 sm:py-16">
                <h3 class="font-semibold text-gray-200 mb-4">Media</h3>

                    <section class="flex items-center border-b border-gray-700 mb-6">
                        <div
                            :class="[ view == 'posters' ? 'text-gray-200 border-b border-light-blue' : 'text-gray-500' ]"
                            class="p-4 cursor-pointer transition duration-200"
                            @click="view = 'posters'">
                                Posters <small>{{images.posters.length}}</small>
                        </div>

                        <div
                            :class="[ view == 'backdrops' ? 'text-gray-200 border-b border-light-blue' : 'text-gray-500' ]"
                            class="p-4 cursor-pointer transition duration-200"
                            @click="view = 'backdrops'">
                                Sfondi <small>{{images.backdrops.length }}</small>
                        </div>  
                    </section>

                    <div v-if="view == 'posters'" class="flex space-x-4 overflow-x-auto overflow-y-hidden h-96">
                        <img
                            v-for="img in images.posters"
                            :key="img.id"
                            :src="image(img.file_path)"
                            :alt="collection + '_poster'">
                    </div>

                    <div v-if="view == 'backdrops'" class="flex space-x-4 overflow-x-auto overflow-y-hidden h-96">
                        <img
                            v-for="img in images.backdrops"
                            :key="img.id"
                            :src="image(img.file_path)"
                            :alt="collection + '_backdrop'"
                            class="object-cover">
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Collections.show',
    mounted() {
        this.getCollection();
        this.getCollectionImages();
    },
    data() {
        return {
            view: 'posters'
        }
    },
    computed: {
        collection() {
            return this.$store.state.collections.collection;
        },
        images() {
            return this.$store.state.collections.images;
        }
    },
    methods: {
        getCollection() {
            this.$store.dispatch('collections/getCollection', {id: this.$route.params.id})
        },
        getCollectionImages() {
            this.$store.dispatch('collections/getCollectionImages', {id: this.$route.params.id})
        },
        image(path) {
            return 'https://image.tmdb.org/t/p/w500/' + path
        },
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