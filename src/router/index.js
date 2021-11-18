import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	/**
	 * Movies
	 */
	{
		path: '/movie/popular',
		name: 'Movie.popular',
		component: () => import(/* webpackChunkName: "MoviePopular" */ '../views/Movies/popular.vue')
	},
	{
		path: '/movie/now-playing',
		name: 'Movie.nowPlaying',
		component: () => import(/* webpackChunkName: "MovieNowPlaying" */ '../views/Movies/nowPlaying.vue')
	},
	{
		path: '/movie/upcoming',
		name: 'Movie.upcoming',
		component: () => import(/* webpackChunkName: "MovieUpcoming" */ '../views/Movies/upcoming.vue')
	},
	{
		path: '/movie/top-rated',
		name: 'Movie.topRated',
		component: () => import(/* webpackChunkName: "MovieTopRated" */ '../views/Movies/topRated.vue')
	},
	{
		path: '/movie/:id',
		name: 'Movie.show',
		component: () => import(/* webpackChunkName: "MovieShow" */ '../views/Movies/show.vue'),
		props: true,
	},
	/*
	* Persons
	*/
	{
		path: '/person/:id',
		name: 'Person.show',
		component: () => import(/* webpackChunkName: "PersonShow" */ '../views/Persons/show.vue'),
		props: true,
	},
	/*
	* Genres
	*/
	{
		path: '/genres',
		name: 'Genre.index',
		component: () => import(/* webpackChunkName: "GenreIndex" */ '../views/Genres/index.vue'),
	},
	{
		path: '/genre/:id',
		name: 'Genre.show',
		component: () => import(/* webpackChunkName: "GenreShow" */ '../views/Genres/show.vue'),
		props: true,
	},
	/*
	* Reviews
	*/
	{
		path: '/review/:id',
		name: 'Review.show',
		component: () => import(/* webpackChunkName: "ReviewShow" */ '../views/Review/show.vue'),
		props: true,
	},
	/*
	* Collections
	*/
	{
		path: '/collections/:id',
		name: 'Collection.show',
		component: () => import(/* webpackChunkName: "CollectionShow" */ '../views/Collections/show.vue'),
		props: true,
	},
	/*
	* Keywords
	*/
	{
		path: '/keyword/:id',
		name: 'Keyword.show',
		component: () => import(/* webpackChunkName: "Keywordhow" */ '../views/Keywords/show.vue'),
		props: true,
	},
	/*
	* Tv Shows
	*/
	{
		path: '/tv/popular',
		name: 'Tv.popular',
		component: () => import(/* webpackChunkName: "TvPopular" */ '../views/Tv/popular.vue'),
	},
	{
		path: '/tv/nowPlaying',
		name: 'Tv.nowPlaying',
		component: () => import(/* webpackChunkName: "TvNowPlaying" */ '../views/Tv/nowPlaying.vue'),
	},
	{
		path: '/tv/topRated',
		name: 'Tv.topRated',
		component: () => import(/* webpackChunkName: "TvTopRated" */ '../views/Tv/topRated.vue'),
	},
	{
		path: '/tv/:id',
		name: 'Tv.show',
		component: () => import(/* webpackChunkName: "TvShow" */ '../views/Tv/show.vue'),
		props: true,
	},
	/*
	* Tv - Seasons
	*/
	{
		path: '/tv/:id/seasons',
		name: 'Tv.Season.index',
		component: () => import(/* webpackChunkName: "SeasonIndex" */ '../views/Tv/Season/index.vue'),
		props: true,
	},
	{
		path: '/tv/:id/season/:number',
		name: 'Tv.Season.show',
		component: () => import(/* webpackChunkName: "SeasonShow" */ '../views/Tv/Season/show.vue'),
		props: true,
	},
	/*
	* Networks
	*/
	{
		path: '/network/:id',
		name: 'Network.show',
		component: () => import(/* webpackChunkName: "NetworkShow" */ '../views/Network/show.vue'),
		props: true,
	},
	/*
	* Search
	*/
	{
		path: '/search',
		name: 'Search.index',
		component: () => import(/* webpackChunkName: "SearchIndex" */ '../views/Search/index.vue'),
	},
]

const router = new VueRouter({
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition;
		} else if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			return { x: 0, y: 0 };
		}
	},
	mode: 'hash',
	base: 'vueflix',
	routes
})

export default router
