import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET 
 */
export const getKeywordDetails = async ({commit}, {id}) => {
    commit('GET_KEYWORD_DETAILS', null)
    const res = await api.get('/keyword/' + id + '?api_key=' + api_key)
    commit('GET_KEYWORD_DETAILS', res.data)
}

export const getKeywordMovies = async ({commit}, {id, page, sort, voteCount}) => {
    commit('GET_KEYWORD_SHOWS', null)
    const res = await api.get('/discover/movie?api_key=' + api_key + '&language=it-IT&sort_by=' + sort + '&vote_count.gte=' + voteCount + '&with_keywords=' + id + '&page=' + page)
    commit('GET_KEYWORD_SHOWS', res.data)
}

export const getKeywordShows = async ({commit}, {id, page, sort, voteCount}) => {
    commit('GET_KEYWORD_SHOWS', null)
    const res = await api.get('/discover/tv?api_key=' + api_key + '&language=it-IT&sort_by=' + sort + '&vote_count.gte=' + voteCount + '&with_keywords=' + id + '&page=' + page)
    commit('GET_KEYWORD_SHOWS', res.data)
}