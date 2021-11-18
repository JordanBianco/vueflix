<template>
    <div>
        <div v-if="person" class="md:flex md:px-6 lg:px-12 md:space-x-8 lg:space-x-14 md:py-26">
            <div class="w-full md:w-1/3">
                <img
                    :src="actorPoster(person.profile_path)"
                    :alt="person.name + '_poster'"
                    class="shadow-2xl object-cover w-full md:rounded-lg">

                <div class="space-y-4 p-6 md:p-0 md:pt-6">
                    <h2 class="text-3xl font-bold text-gray-200 tracking-tight mb-4">{{ person.name }}</h2>
                    <!-- Sito web -->
                    <a
                        :href="person.homepage"
                        v-if="person.homepage"
                        target="_blank"
                        class="block text-light-blue">Sito Web</a>
                    <!-- Compleanno -->
                    <div>
                        <span class="block text-xs text-gray-400 mb-0.5">Data di Nascita</span>
                        <span class="block text-sm text-gray-200">{{ $moment(person.birthday).format('DD-MM-YYYY') }}</span>
                    </div>
                    <!-- Giorno Morte -->
                    <div v-if="person.deathday">
                        <span class="block text-xs text-gray-400 mb-0.5">Giorno della Morte</span>
                        <span class="block text-sm text-gray-200">{{ $moment(person.deathday).format('DD-MM-YYYY') }}</span>
                    </div>
                    <!-- Luogo Nascita -->
                    <div>
                        <span class="block text-xs text-gray-400 mb-0.5">Luogo di Nascita</span>
                        <span class="block text-sm text-gray-200">{{person.place_of_birth}}</span>
                    </div>
                    <!-- Genere -->
                    <div>
                        <span class="block text-xs text-gray-400 mb-0.5">Sesso</span>
                        <span class="block text-sm text-gray-200">{{gender}}</span>
                    </div>
                </div>
            </div>

            <div class="p-6 md:p-0 md:w-2/3">
                <!-- Bio -->
                <div v-if="person.biography" class="mb-12">
                    <span class="block text-sm text-gray-400 uppercase mb-0.5">Biografia</span>
                    <span class="block text-gray-200">{{person.biography}}</span>
                </div>

                <div v-if="movies" class="text-sm mb-10">
                    <!-- FILM -->
                    <h3 class="font-semibold text-gray-200 mb-4">Filmografia</h3>
                    <div v-for="(movie, index) in movies.cast" :key="index" class="border-b border-gray-700 px-2 py-1.5">
                         <div class="flex items-start space-x-6 text-gray-200 py-2">
                            <span>{{ movie.release_date ? $moment(movie.release_date).format('YYYY') : '----' }}</span>
                            <div>
                                <router-link
                                    class="hover:text-light-blue transition duration-200"
                                    :to="{ name: 'Movie.show', params: { id: movie.id }}">
                                        <span>{{ movie.title  }}</span>
                                </router-link>
                                <p class="text-gray-400 text-xs md:text-sm">interpreta {{ movie.character }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="movies" class="text-sm">
                    <!-- Serie TV -->
                    <h3 class="font-semibold text-gray-200 mb-4">Serie TV</h3>
                    <div v-for="(show, index) in tv.cast" :key="index" class="border-b border-gray-700 px-2 py-1.5">
                         <div class="flex items-start space-x-6 text-gray-200 py-2">
                            <span>{{ show.first_air_date ? $moment(show.first_air_date).format('YYYY') : '----' }}</span>
                            <div>
                                <router-link
                                    class="hover:text-light-blue transition duration-200"
                                    :to="{ name: 'Tv.show', params: { id: show.id }}">
                                        <span>{{ show.name  }}</span>
                                </router-link>
                                <p class="text-gray-400 text-xs md:text-sm">interpreta {{ show.character }}</p>
                                <p class="text-gray-400 text-xs md:text-sm">{{ show.episode_count }} episodi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Persons.show',
    mounted() {
        this.getPerson();
        this.getPersonMovieCredits();
        this.getPersonTvCredits();
    },
    computed: {
        person() {
            return this.$store.state.persons.person;
        },
        movies() {
            return this.$store.state.persons.movies;
        },
        tv() {
            return this.$store.state.persons.tv;
        },
        gender() {
            return this.person.gender == 1 ? 'Femmina' : 'Maschio'
        },
    },
    methods: {
        getPerson() {
            this.$store.dispatch('persons/getPerson', {id: this.$route.params.id})
        },
        getPersonMovieCredits() {
            this.$store.dispatch('persons/getPersonMovieCredits', {id: this.$route.params.id})
        },
        getPersonTvCredits() {
            this.$store.dispatch('persons/getPersonTvCredits', {id: this.$route.params.id})
        },
        actorPoster(path) {
            return 'https://image.tmdb.org/t/p/w500/' + path
        },
    }
}
</script>