import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET 
 */
// Index
export const getMovieGenres = async ({commit}) => {
    const res = await api.get('/genre/movie/list?api_key=' + api_key)
    commit('GET_MOVIE_GENRES', res.data)
}

export const getTvGenres = async ({commit}) => {
    const res = await api.get('/genre/tv/list?api_key=' + api_key)
    commit('GET_TV_GENRES', res.data)
}

// Show
export const getGenreMovies = async ({commit}, {id, page, sort, voteCount}) => {
    commit('GET_SHOWS', null)
    const res = await api.get('/discover/movie?api_key=' + api_key + '&language=it-IT&sort_by=' + sort + '&vote_count.gte=' + voteCount + '&with_genres=' + id + '&page=' + page)
    commit('GET_SHOWS', res.data)
}

export const getGenreShows = async ({commit}, {id, page, sort, voteCount}) => {
    commit('GET_SHOWS', null)
    const res = await api.get('/discover/tv?api_key=' + api_key + '&language=it-IT&sort_by=' + sort + '&vote_count.gte=' + voteCount + '&with_genres=' + id + '&page=' + page)
    commit('GET_SHOWS', res.data)
}