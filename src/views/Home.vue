<template>
	<div>
		<HomeHeader :trending="trending"/>

		<!-- Popolari -->
		<section class="px-6 pt-16 pb-8 sm:px-12">
			<div class="pb-4 mb-8 flex flex-col sm:flex-row items-baseline sm:space-x-8 border-b border-gray-700">
				<h2 class="mb-2.5 sm:mb-0 text-lg font-semibold text-gray-200">Film e serie popolari</h2>

				<div class="flex items-center space-x-6">
					<div
						@click="changePopularView('movies')"
						:class="[ popularView == 'movies' ? 'text-light-blue' : 'text-gray-500 hover:text-gray-400' ]"
						class="cursor-pointer transition duration-200">
							Cinema
					</div>
					
					<div
						@click="changePopularView('series')"
						:class="[ popularView == 'series' ? 'text-light-blue' : 'text-gray-500 hover:text-gray-400' ]"
						class="cursor-pointer transition duration-200">
							Streaming
					</div>
				</div>
			</div>
			<div v-if="shows" class="flex items-center space-x-6 overflow-x-auto overflow-y-hidden pb-26">
				<div v-for="show in shows.results" :key="show.id" class="h-72 w-48 flex-none">
					<ShowCover :show="show"/>
				</div>
			</div>
		</section>

		<!-- Trending -->
		<section  class="px-6 pt-16 pb-32 sm:px-12">
			<div class="pb-4 mb-8 border-b border-gray-700">
				<h2 class="font-semibold text-lg text-gray-200 mb-2.5 sm:mb-0">In tendenza questa settimana</h2>
			</div>
			
			<div v-if="trending" class="flex items-center space-x-6 overflow-x-auto overflow-y-hidden pb-26">
				<div v-for="show in trending.results" :key="show.id" class="h-72 w-48 flex-none">
					<ShowCover :show="show" />
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import ShowCover from '@/components/ShowCover'

export default {
	name: 'Home',
	components: {
		HomeHeader,
		ShowCover,
	},
	data() {
		return {
			popularView: 'movies',
		}
	},
	mounted() {
		this.getPopularMovies();
		this.getWeekTrendingShows();
	},
	computed: {
		shows() {
            return this.$store.state.home.shows;
        },
		trending() {
            return this.$store.state.home.trending;
        },
	},
	methods: {
		getPopularMovies() {
            this.$store.dispatch('home/getPopularMovies');
        },
		getPopularSeries() {
            this.$store.dispatch('home/getPopularSeries');
        },
		getWeekTrendingShows() {
            this.$store.dispatch('home/getWeekTrendingShows');
        },
		changePopularView(value) {
			this.popularView = value;

			if (this.popularView == 'movies') {
				this.getPopularMovies()
			} else {
				this.getPopularSeries()
			}
		},
	}
}
</script>
