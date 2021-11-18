<template>
    <section class="mt-10">
        <h2 class="font-semibold text-gray-200 mb-4">Parole Chiave</h2>
        <div v-if="keywords.length > 0">
            <div class="flex flex-wrap">
                <div v-for="keyword in keywords" :key="keyword.id">
                    <router-link :to="{ name: 'Keyword.show', params: { id: keyword.id }}" class="mr-2.5 mb-2.5 bg-gray-750 hover:bg-gray-700 transition duration-200 text-gray-200 px-2 py-1.5 rounded-lg block max-w-max text-sm">
                        {{ keyword.name }}
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else class="text-gray-400 text-sm">
            Non ci sono parole chiave
        </div>
    </section>
</template>

<script>
export default {
    name: 'Show.keywords',
    props: ['keywords']
}
</script>