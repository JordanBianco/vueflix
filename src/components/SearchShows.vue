<template>
    <div class="mt-8 relative">
        <input
            v-model="query"
            @keyup.enter="searchShow"
            placeholder="Cerca film o serie tv"
            type="text"
            class="px-4 py-3 text-sm rounded-full bg-white text-gray-800 w-full focus:outline-none shadow-2xl">
        <button
            class="absolute -right-1 py-3 px-6 sm:px-8 text-sm font-semibold rounded-full bg-gradient-to-r from-light-green to-light-blue hover:text-gray-800 transition duration-200">
                Cerca
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: ''
        }
    },
    methods: {
        searchShow() {
            this.$router.push({ name: 'Search.index', query: { query: this.query } });
        }
    }
}
</script>

<style>

</style>