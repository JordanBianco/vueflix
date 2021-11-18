<template>
    <section>
        <h2 class="font-semibold text-gray-200 mb-4">Potrebbero Interessarti</h2>
        <div v-if="recommendations.results.length > 0" class="flex items-center space-x-4 sm:space-x-8 overflow-x-auto overflow-y-hidden pb-26">
            <div v-for="show in recommendations.results" :key="show.id" class="h-56 w-36 flex-none">
                <ShowCover :show="show" />
            </div>
        </div>
        <div v-else class="text-gray-400 text-sm">
            Non ci film consigliati
        </div>
    </section>
</template>

<script>
import ShowCover from '@/components/ShowCover'

export default {
    name: 'Show.Recommendations',
    props: ['recommendations'],
    components: {
        ShowCover
    },
}
</script>