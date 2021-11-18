import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

require('dotenv').config()

import sidebar from '@/store/modules/sidebar'
import home from '@/store/modules/home'
import search from '@/store/modules/search'

// Movies
import movies from '@/store/modules/movies'
import persons from '@/store/modules/persons'
import genres from '@/store/modules/genres'
import reviews from '@/store/modules/reviews'
import collections from '@/store/modules/collections'
import keywords from '@/store/modules/keywords'

// TV
import tv from '@/store/modules/tv'
import seasons from '@/store/modules/seasons'

// Networks
import networks from '@/store/modules/networks'


export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    sidebar,
    home,
    search,
    movies,
    persons,
    genres,
    reviews,
    collections,
    keywords,
    tv,
    seasons,
    networks
  }
})
