<template>
    <section
        class="py-24 px-8 rounded-lg shadow-2xl"
        :style="'background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(rgba(45, 45, 45, 0.6), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/' + collection.backdrop_path">
            <h2 class="lg:text-4xl text-gray-200 tracking-tight text-3xl font-semibold">
                <span class="text-2xl">Parte di</span>
                {{ collection.name }}
            </h2>
            <router-link
                :to="{ name: 'Collection.show', params: { id: collection.id } }"
                class="block max-w-max bg-gradient-to-r from-light-green to-light-blue text-gray-200 hover:text-gray-800 transition duration-200 font-bold text-sm rounded-full px-6 py-3 mt-4">
                    Esplora la collezione
            </router-link>
    </section>
</template>

<script>
export default {
    name: 'Movie.Collection',
    props: ['collection']
}
</script>