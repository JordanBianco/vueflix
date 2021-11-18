<template>
    <div class="flex items-center justify-between mt-20" v-if="shows.results">
        <button
            v-if="page > 1"
            @click="prevPage"
            class="bg-gradient-to-r from-blue-600 to-light-blue rounded-lg text-gray-200 hover:text-gray-800 font-semibold shadow-2xl px-5 py-1.5 cursor-pointer transition duration-200">Prev</button>
        <span v-else></span>

        <button
            v-if="shows.total_pages > 1 && shows.page < shows.total_pages"
            @click="nextPage"
            class="bg-gradient-to-r from-blue-600 to-light-blue rounded-lg text-gray-200 hover:text-gray-800 font-semibold shadow-2xl px-5 py-1.5 cursor-pointer transition duration-200">Next</button>
    </div>
</template>

<script>
export default {
    name: 'Layout.Pagination',
    props: ['shows', 'page'],
    methods: {
        prevPage() {
            window.scrollTo(0, 0);
            this.$emit('prevPage')
        },
        nextPage() {
            window.scrollTo(0, 0);
            this.$emit('nextPage')
        }
    }
}
</script>