import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

export const getPopularMovies = async ({commit}) => {
    const res = await api.get('/movie/popular?api_key=' + api_key + '&language=it-IT')
    commit('GET_SHOWS', res.data)
}

export const getPopularSeries = async ({commit}) => {
    const res = await api.get('/tv/popular?api_key=' + api_key  + '&language=it-IT')
    commit('GET_SHOWS', res.data)
}

export const getWeekTrendingShows = async ({commit}) => {
    const res = await api.get('/trending/all/week?api_key=' + api_key + '&language=it-IT')
    commit('GET_TRENDING', res.data)
}