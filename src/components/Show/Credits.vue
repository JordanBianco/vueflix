<template>
    <section >
        <h2 class="font-semibold text-gray-200 mb-4">Attori in primo piano</h2>
        <div class="flex space-x-6 overflow-x-auto overflow-y-hidden pb-10">
            <router-link
                v-for="actor in actors"
                :key="actor.id"
                :to="{ name: 'Person.show', params: {id: actor.id }}"
                class="h-64 w-40 flex-none rounded-lg relative hover:shadow-2xl transition duration-200">
                    <img
                        :src="actorPoster(actor)"
                        :alt="actor.name + '_poster'"
                        class="rounded-lg w-full h-full object-cover">

                        <div class="absolute bottom-0 left-0 right-0 p-2 text-sm bg-black bg-opacity-60 transition duration-200 rounded-b-lg">
                            <h4 class="font-semibold text-gray-200">{{ actor.name }}</h4>
                            <p class="text-gray-300">{{ actor.character }}</p>
                        </div>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Show.Credits',
    props: ['actors'],
    methods: {
        actorPoster(actor) {
            return actor.profile_path 
                ? 'https://image.tmdb.org/t/p/w500/' + actor.profile_path 
                : 'https://eu.ui-avatars.com/api/?name=' + actor.name
        },
    }
}
</script>