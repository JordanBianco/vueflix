import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET 
 */
export const getPerson = async ({commit}, {id}) => {
    commit('GET_PERSON', null)
    const res = await api.get('/person/' + id + '?api_key=' + api_key + '&language=it-IT')
    commit('GET_PERSON', res.data)
}

export const getPersonMovieCredits = async ({commit}, {id}) => {
    const res = await api.get('/person/' + id + '/movie_credits?api_key=' + api_key + '&language=it-IT')
    commit('GET_MOVIE_CREDITS', res.data)
}

export const getPersonTvCredits = async ({commit}, {id}) => {
    const res = await api.get('/person/' + id + '/tv_credits?api_key=' + api_key + '&language=it-IT')
    commit('GET_TV_CREDITS', res.data)
}