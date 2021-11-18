<template>
    <div class="rounded-lg relative h-full">
        <router-link
            :to="{ name: show.first_air_date ? 'Tv.show' : 'Movie.show', params: {id: show.id }}">
                <img
                    :src="image(show.poster_path)"
                    :alt="show.title + '_poster'"
                    class="rounded-lg object-cover w-full h-full hover:opacity-75 transition duration-150 bg-gray-900">
        </router-link>

        <div class="text-sm mt-2">
            <h4 class="text-gray-200 font-semibold leading-tight">{{ show.first_air_date ? show.name : show.title }}</h4>
            <p class="text-gray-400 mt-1">{{ show.first_air_date ? $moment(show.first_air_date).format('DD/MM/YYYY') : $moment(show.release_date).format('DD/MM/YYYY') }}</p>
        </div>

        <!-- Avg -->
        <div
            :class="'border-' + avgColor() + '-500 text-' + avgColor() + '-500'"
            class="bg-gray-900 border-3 font-semibold text-sm flex justify-center items-center w-11 h-11 lg:w-12 lg:h-12 shadow-xl rounded-full absolute left-2 top-2">
                {{ avg() }} <small>%</small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowCover',
    props: ['show'],
    methods: {
        avg() {
            let avg = this.show.vote_average * 10;
            if (avg == 100) {
                return avg.toString().substring(0, 3)
            } else {
                return avg.toString().substring(0, 2) // recommendations api bug? it return 4 + digits instead of 2
            }
		},
		avgColor() {
			if (this.avg(this.show) >= 70 && this.avg(this.show) <= 100) {
				return 'c-green';
			} else if (this.avg(this.show) >= 51 && this.avg(this.show) <= 69) {
				return 'yellow'
			} else if (this.avg(this.show) <= 50 && this.avg(this.show) >= 1) {
				return 'red'
			} else if (this.avg(this.show) == 0) {
				return 'gray'
			}
		},
        image(path) {
            if (path) {
                return 'https://image.tmdb.org/t/p/w500/' + path
            } else {
                return 'https://eu.ui-avatars.com/api/?name=' + this.show.title
            }
        },
    }
}
</script>