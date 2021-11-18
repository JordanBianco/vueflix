import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET MOVIE LIST 
 */
export const getPopularMovies = async ({commit}, {page, sort, genre, voteCount}) => {
    commit('GET_MOVIES', null)
    const res = await api.get(
        '/discover/movie?api_key=' + api_key + '&language=it-IT&sort_by=' + sort + '&vote_count.gte=' + voteCount + '&with_genres=' + genre + '&page=' + page
    )
    commit('GET_MOVIES', res.data)
}

export const getNowPlayingMovies = async ({commit}, {page, genre}) => {
    commit('GET_MOVIES', null)
    const res = await api.get('/movie/now_playing?api_key=' + api_key + '&language=it-IT&region=IT&with_genres=' + genre + '&page=' + page)
    commit('GET_MOVIES', res.data)
}

export const getUpcomingMovies = async ({commit}, {page, genre}) => {
    commit('GET_MOVIES', null)
    const res = await api.get('/movie/upcoming?api_key=' + api_key + '&language=it-IT&region=IT&with_genres=' + genre + '&page=' + page)
    commit('GET_MOVIES', res.data)
}

export const getTopRatedMovies = async ({commit}, {page, genre}) => {
    commit('GET_MOVIES', null)
    const res = await api.get('/movie/top_rated?api_key=' + api_key + '&language=it-IT&region=IT&with_genres=' + genre + '&page=' + page)
    commit('GET_MOVIES', res.data)
}

/*
 *  GET SINGLE MOVIE INFO
 */
export const getMovie = async ({commit}, {id}) => {
    commit('GET_MOVIE', null)
    const res = await api.get('/movie/' + id + '?api_key=' + api_key + '&language=it-IT')
    commit('GET_MOVIE', res.data)
}

export const getMovieReviews = async ({commit}, {id, page}) => {
    const res = await api.get('/movie/' + id + '/reviews?api_key=' + api_key + '&page=' + page)
    commit('GET_REVIEWS', res.data)
}

export const getMovieCredits = async ({commit}, {id}) => {
    commit('GET_CREDITS', null)
    const res = await api.get('/movie/' + id + '/credits?api_key=' + api_key)
    commit('GET_CREDITS', res.data)
}

export const getRecommendations = async ({commit}, {id}) => {
    commit('GET_RECOMMENDATIONS', null)
    const res = await api.get('/movie/' + id + '/recommendations?api_key=' + api_key)
    commit('GET_RECOMMENDATIONS', res.data)
}

export const getMovieKeywords = async ({commit}, {id}) => {
    commit('GET_KEYWORDS', null)
    const res = await api.get('/movie/' + id + '/keywords?api_key=' + api_key)
    commit('GET_KEYWORDS', res.data.keywords)
}
