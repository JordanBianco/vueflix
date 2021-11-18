import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET MOVIE LIST 
 */
export const getPopularShows = async ({commit}, {page, sort, genre, voteCount}) => {
    commit('GET_SHOWS', null)
    const res = await api.get(
        '/discover/tv?api_key=' + api_key + '&language=it-IT&sort_by=' + sort + '&vote_count.gte=' + voteCount + '&with_genres=' + genre + '&page=' + page
    )
    commit('GET_SHOWS', res.data)
}

export const getNowPlayingShows = async ({commit}, {page, genre}) => {
    const res = await api.get('/tv/on_the_air?api_key=' + api_key + '&language=it-IT&region=IT&with_genres=' + genre + '&page=' + page)
    commit('GET_SHOWS', res.data)
}

export const getTopRatedShows = async ({commit}, {page, genre}) => {
    const res = await api.get('/tv/top_rated?api_key=' + api_key + '&language=it-IT&region=IT&with_genres=' + genre + '&page=' + page)
    commit('GET_SHOWS', res.data)
}

/*
 *  GET SINGLE MOVIE INFO
 */
export const getShow = async ({commit}, {id}) => {
    commit('GET_SHOW', null)
    const res = await api.get('/tv/' + id + '?api_key=' + api_key + '&language=it-IT')
    commit('GET_SHOW', res.data)
    console.log(res.data)
}

export const getShowReviews = async ({commit}, {id, page}) => {
    const res = await api.get('/tv/' + id + '/reviews?api_key=' + api_key + '&page=' + page)
    commit('GET_REVIEWS', res.data)
}

export const getShowCredits = async ({commit}, {id}) => {
    commit('GET_CREDITS', null)
    const res = await api.get('/tv/' + id + '/credits?api_key=' + api_key)
    commit('GET_CREDITS', res.data)
}

export const getShowRecommendations = async ({commit}, {id}) => {
    commit('GET_RECOMMENDATIONS', null)
    const res = await api.get('/tv/' + id + '/recommendations?api_key=' + api_key)
    commit('GET_RECOMMENDATIONS', res.data)
}

export const getShowKeywords = async ({commit}, {id}) => {
    commit('GET_KEYWORDS', null)
    const res = await api.get('/tv/' + id + '/keywords?api_key=' + api_key)
    commit('GET_KEYWORDS', res.data.results)
}
